(function () {
  let APIFY_TOKEN = localStorage.getItem("apify_token") || "";
  const ACTOR_ID = "compass~crawler-google-places";
  const PAGE_SIZE = 25;

  let leads = [];
  let currentPage = 1;
  let sortField = null;
  let sortDir = "asc";

  // DOM refs
  const searchForm = document.getElementById("searchForm");
  const generateBtn = document.getElementById("generateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const emptyState = document.getElementById("emptyState");
  const loadingState = document.getElementById("loadingState");
  const errorState = document.getElementById("errorState");
  const errorMessage = document.getElementById("errorMessage");
  const retryBtn = document.getElementById("retryBtn");
  const tableContainer = document.getElementById("tableContainer");
  const leadsBody = document.getElementById("leadsBody");
  const resultsCount = document.getElementById("resultsCount");
  const exportBtn = document.getElementById("exportBtn");
  const pagination = document.getElementById("pagination");
  const prevPage = document.getElementById("prevPage");
  const nextPage = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // ---- Theme ----
  function initTheme() {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcon(saved);
  }

  function updateThemeIcon(theme) {
    themeIcon.innerHTML = theme === "dark" ? "&#9790;" : "&#9728;";
  }

  themeToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });

  // ---- Multi-select dropdowns ----
  function initMultiSelect(containerId, items) {
    const container = document.getElementById(containerId);
    const btn = container.querySelector(".multi-select-btn");
    const dropdown = container.querySelector(".multi-select-dropdown");
    const label = container.querySelector(".multi-select-label");
    const countBadge = container.querySelector(".multi-select-count");

    items.forEach(function (item) {
      const option = document.createElement("label");
      option.className = "multi-select-option";
      option.innerHTML =
        '<input type="checkbox" value="' + item + '"> <span>' + item + "</span>";
      dropdown.appendChild(option);
    });

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      // Close other open dropdowns
      document.querySelectorAll(".multi-select.open").forEach(function (el) {
        if (el !== container) el.classList.remove("open");
      });
      container.classList.toggle("open");
    });

    dropdown.addEventListener("change", function () {
      updateMultiSelectLabel(container);
    });

    return container;
  }

  function updateMultiSelectLabel(container) {
    const checked = container.querySelectorAll('input[type="checkbox"]:checked');
    const label = container.querySelector(".multi-select-label");
    const countBadge = container.querySelector(".multi-select-count");

    if (checked.length === 0) {
      label.textContent = container.id === "sectorSelect" ? "Select sectors..." : "Select job titles...";
      label.classList.remove("has-selection");
      countBadge.style.display = "none";
    } else {
      const names = Array.from(checked).map(function (cb) { return cb.value; });
      label.textContent = names.join(", ");
      label.classList.add("has-selection");
      countBadge.textContent = checked.length;
      countBadge.style.display = "inline-block";
    }
  }

  function getMultiSelectValues(containerId) {
    var checked = document.querySelectorAll(
      "#" + containerId + ' input[type="checkbox"]:checked'
    );
    return Array.from(checked).map(function (cb) { return cb.value; });
  }

  // Close dropdowns on outside click
  document.addEventListener("click", function () {
    document.querySelectorAll(".multi-select.open").forEach(function (el) {
      el.classList.remove("open");
    });
  });

  // ---- Populate form ----
  function initForm() {
    initMultiSelect("sectorSelect", SECTORS);
    initMultiSelect("jobTitleSelect", JOB_TITLES);

    var select = document.getElementById("targetGroup");
    TARGET_GROUPS.forEach(function (tg) {
      var opt = document.createElement("option");
      opt.value = tg.value;
      opt.textContent = tg.label + " — " + tg.description;
      select.appendChild(opt);
    });
  }

  // ---- Apify API ----
  function buildSearchQueries() {
    var sectors = getMultiSelectValues("sectorSelect");
    var jobTitles = getMultiSelectValues("jobTitleSelect");
    var targetGroup = document.getElementById("targetGroup").value;
    var location = document.getElementById("location").value || "Singapore";
    var keywords = document.getElementById("keywords").value;

    var queries = [];

    // Build search terms from selected criteria
    var sectorTerms = sectors.length > 0 ? sectors : ["business"];
    var titleTerms = jobTitles.length > 0 ? jobTitles : [];

    sectorTerms.forEach(function (sector) {
      var query = sector + " companies in " + location;
      if (targetGroup) {
        var tg = TARGET_GROUPS.find(function (t) { return t.value === targetGroup; });
        if (tg) query = tg.label + " " + query;
      }
      if (keywords) query += " " + keywords;
      queries.push(query);
    });

    return queries;
  }

  async function runApifyActor(queries) {
    var input = {
      searchStringsArray: queries.slice(0, 5),
      maxCrawledPlacesPerSearch: 20,
      language: "en",
      countryCode: "sg"
    };

    // Use the synchronous run endpoint — waits for completion and returns dataset items directly
    var url = "https://api.apify.com/v2/acts/" + ACTOR_ID + "/run-sync-get-dataset-items?token=" + APIFY_TOKEN;

    var response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      var errorBody = "";
      try { errorBody = await response.text(); } catch (e) {}
      throw new Error(
        "Apify API error (HTTP " + response.status + "): " +
        (errorBody || response.statusText)
      );
    }

    return await response.json();
  }

  function parseApifyResults(results) {
    return results.map(function (item) {
      return {
        companyName: item.title || item.name || "N/A",
        industry: item.categoryName || item.category || "N/A",
        contactPerson: "N/A",
        jobTitle: "N/A",
        email: item.email || item.emails && item.emails[0] || "N/A",
        phone: item.phone || item.phoneUnformatted || "N/A",
        website: item.website || item.url || "N/A",
        linkedin: "N/A",
        companySize: "N/A",
        location: item.address || item.street || "Singapore",
        source: "Google Maps",
        dateFound: new Date().toISOString().slice(0, 10)
      };
    });
  }

  // ---- Table rendering ----
  function showState(state) {
    emptyState.style.display = state === "empty" ? "block" : "none";
    loadingState.style.display = state === "loading" ? "block" : "none";
    errorState.style.display = state === "error" ? "block" : "none";
    tableContainer.style.display = state === "results" ? "block" : "none";
    pagination.style.display = state === "results" ? "flex" : "none";
    resultsCount.style.display = state === "results" ? "inline-block" : "none";
    exportBtn.style.display = state === "results" ? "inline-flex" : "none";
  }

  function renderTable() {
    var sorted = leads.slice();
    if (sortField) {
      sorted.sort(function (a, b) {
        var va = (a[sortField] || "").toLowerCase();
        var vb = (b[sortField] || "").toLowerCase();
        if (va < vb) return sortDir === "asc" ? -1 : 1;
        if (va > vb) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }

    var totalPages = Math.ceil(sorted.length / PAGE_SIZE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    var start = (currentPage - 1) * PAGE_SIZE;
    var pageLeads = sorted.slice(start, start + PAGE_SIZE);

    leadsBody.innerHTML = "";
    pageLeads.forEach(function (lead) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td title='" + esc(lead.companyName) + "'>" + esc(lead.companyName) + "</td>" +
        "<td title='" + esc(lead.industry) + "'>" + esc(lead.industry) + "</td>" +
        "<td>" + esc(lead.contactPerson) + "</td>" +
        "<td>" + esc(lead.jobTitle) + "</td>" +
        "<td>" + (lead.email !== "N/A" ? "<a href='mailto:" + esc(lead.email) + "'>" + esc(lead.email) + "</a>" : "N/A") + "</td>" +
        "<td>" + esc(lead.phone) + "</td>" +
        "<td>" + (lead.website !== "N/A" ? "<a href='" + esc(lead.website) + "' target='_blank' rel='noopener'>" + truncate(lead.website, 30) + "</a>" : "N/A") + "</td>" +
        "<td>" + esc(lead.location) + "</td>";
      leadsBody.appendChild(tr);
    });

    resultsCount.textContent = sorted.length + " leads found";
    pageInfo.textContent = "Page " + currentPage + " of " + totalPages;
    prevPage.disabled = currentPage <= 1;
    nextPage.disabled = currentPage >= totalPages;

    // Update sort indicators
    document.querySelectorAll(".leads-table th").forEach(function (th) {
      th.classList.remove("sort-asc", "sort-desc");
      if (th.dataset.sort === sortField) {
        th.classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
      }
    });
  }

  function esc(str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  }

  function truncate(str, len) {
    if (!str) return "";
    str = str.replace(/^https?:\/\//, "");
    return str.length > len ? str.slice(0, len) + "..." : str;
  }

  // ---- Event handlers ----
  searchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    await generateLeads();
  });

  async function generateLeads() {
    if (!APIFY_TOKEN) {
      var token = prompt("Enter your Apify API token (find it at console.apify.com → Settings → API & Integrations):");
      if (!token) return;
      APIFY_TOKEN = token.trim();
      localStorage.setItem("apify_token", APIFY_TOKEN);
    }
    showState("loading");
    generateBtn.disabled = true;
    generateBtn.querySelector(".btn-text").textContent = "Generating...";
    generateBtn.querySelector(".btn-spinner").style.display = "inline-block";

    try {
      var queries = buildSearchQueries();
      var rawResults = await runApifyActor(queries);
      leads = parseApifyResults(rawResults);

      if (leads.length === 0) {
        showState("empty");
        emptyState.querySelector("p").textContent = "No leads found matching your criteria. Try broadening your search.";
      } else {
        currentPage = 1;
        sortField = null;
        sortDir = "asc";
        showState("results");
        renderTable();
      }
    } catch (err) {
      showState("error");
      errorMessage.textContent = err.message || "An error occurred while generating leads.";
    } finally {
      generateBtn.disabled = false;
      generateBtn.querySelector(".btn-text").textContent = "Generate Leads";
      generateBtn.querySelector(".btn-spinner").style.display = "none";
    }
  }

  clearBtn.addEventListener("click", function () {
    document.querySelectorAll('.multi-select input[type="checkbox"]').forEach(function (cb) {
      cb.checked = false;
    });
    document.querySelectorAll(".multi-select").forEach(updateMultiSelectLabel);
    document.getElementById("targetGroup").value = "";
    document.getElementById("location").value = "Singapore";
    document.getElementById("keywords").value = "";
    leads = [];
    showState("empty");
    emptyState.querySelector("p").innerHTML =
      "Configure your search criteria and click <strong>Generate Leads</strong> to discover B2B contacts in Singapore.";
  });

  retryBtn.addEventListener("click", function () {
    generateLeads();
  });

  // Sorting
  document.querySelectorAll(".leads-table th[data-sort]").forEach(function (th) {
    th.addEventListener("click", function () {
      var field = th.dataset.sort;
      if (sortField === field) {
        sortDir = sortDir === "asc" ? "desc" : "asc";
      } else {
        sortField = field;
        sortDir = "asc";
      }
      renderTable();
    });
  });

  // Pagination
  prevPage.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  nextPage.addEventListener("click", function () {
    var totalPages = Math.ceil(leads.length / PAGE_SIZE);
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
    }
  });

  // Export
  exportBtn.addEventListener("click", function () {
    exportToCSV(leads);
  });

  // ---- Init ----
  initTheme();
  initForm();
})();
