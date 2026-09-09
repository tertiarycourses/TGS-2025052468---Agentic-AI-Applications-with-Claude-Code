#!/usr/bin/env node
// PreToolUse hook: validate bride-booking form data before the browser submits it.
// Reads tool input JSON from stdin. Exits with code 2 to block the tool call.

let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    process.exit(0); // not JSON — don't block
  }

  const blob = JSON.stringify(payload);
  const isBookingFormCall =
    /Full Name|Preferred Date|Preferred Time|Photography Package/i.test(blob) ||
    /booking|formsubmit/i.test(blob);

  if (!isBookingFormCall) {
    process.stdout.write(raw);
    process.exit(0);
  }

  const errors = [];
  const get = (label) => {
    const m = blob.match(new RegExp(`"${label}"\\s*:\\s*"([^"]*)"`, "i"));
    return m ? m[1].trim() : "";
  };

  const name = get("Full Name");
  const email = get("Email");
  const phone = get("Phone");
  const date = get("Preferred Date");
  const people = get("Number of People");

  if (!name) errors.push("Full Name is required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Email is invalid");
  if ((phone.match(/\d/g) || []).length < 8) errors.push("Phone needs at least 8 digits");
  if (date && new Date(date) < new Date(new Date().toDateString()))
    errors.push("Preferred Date must be today or later");
  if (people && !(parseInt(people, 10) > 0)) errors.push("Number of People must be positive");

  if (errors.length) {
    process.stderr.write("Booking validation failed:\n - " + errors.join("\n - ") + "\n");
    process.exit(2);
  }

  process.stdout.write(raw);
});
