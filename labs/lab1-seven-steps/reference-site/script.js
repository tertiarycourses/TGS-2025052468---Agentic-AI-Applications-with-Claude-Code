/* NorthPoint Systems — enquiry form validation & UX
   Vanilla JS, no dependencies. */

(function () {
  'use strict';

  var form = document.getElementById('enquiryForm');
  var successBox = document.getElementById('formSuccess');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function setError(fieldId, message) {
    var input = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + 'Error');
    if (errorEl) errorEl.textContent = message || '';
    if (input) input.classList.toggle('invalid', Boolean(message));
    return !message;
  }

  function validate(data) {
    var ok = true;

    ok = setError('name', data.name ? '' : 'Please enter your name.') && ok;

    if (!data.email) {
      ok = setError('email', 'Please enter your email.') && ok;
    } else if (!EMAIL_RE.test(data.email)) {
      ok = setError('email', 'That does not look like a valid email address.') && ok;
    } else {
      setError('email', '');
    }

    // Phone is optional — only validated when something was typed.
    if (data.phone && data.phone.replace(/\D/g, '').length < 8) {
      ok = setError('phone', 'Please enter at least 8 digits, or leave it blank.') && ok;
    } else {
      setError('phone', '');
    }

    ok = setError('message', data.message ? '' : 'Please tell us a little about your project.') && ok;

    return ok;
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      successBox.textContent = '';

      var data = {
        name:    document.getElementById('name').value.trim(),
        email:   document.getElementById('email').value.trim(),
        phone:   document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        message: document.getElementById('message').value.trim()
      };

      if (!validate(data)) {
        return;
      }

      // Where a real backend would go:
      //
      // fetch('https://api.example.com/enquiries', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      //   .then(function (res) { return res.json(); })
      //   .then(function (res) { console.log('Saved', res); })
      //   .catch(function (err) { console.error(err); });

      console.log('Enquiry submitted:', data);

      successBox.textContent = "Thanks! We'll be in touch shortly.";
      form.reset();
    });
  }
})();
