function exportToCSV(leads) {
  if (!leads || leads.length === 0) return;

  const headers = [
    "Company Name", "Industry", "Contact Person", "Job Title",
    "Email", "Phone", "Website", "LinkedIn",
    "Company Size", "Location", "Source", "Date Found"
  ];

  const keys = [
    "companyName", "industry", "contactPerson", "jobTitle",
    "email", "phone", "website", "linkedin",
    "companySize", "location", "source", "dateFound"
  ];

  const escapeCSV = (val) => {
    if (val == null) return "";
    const str = String(val);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const rows = [headers.join(",")];
  for (const lead of leads) {
    rows.push(keys.map((k) => escapeCSV(lead[k])).join(","));
  }

  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "leads_sg_" + new Date().toISOString().slice(0, 10) + ".csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
