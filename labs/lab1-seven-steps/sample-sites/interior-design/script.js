document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Custom Cursor
    const cursor = document.getElementById('customCursor');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll('a, button, .pillar-item, .filter-btn, .form-input');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 3. Scroll Header State
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal-fade');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Mobile Burger Navigation Menu
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // 6. Portfolio Category Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const showcaseItems = document.querySelectorAll('.showcase-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            showcaseItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // Add class transition
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    if (filterValue === 'all' || filterValue === category) {
                        item.style.display = 'block';
                        // Force reflow
                        item.offsetHeight;
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    } else {
                        item.style.display = 'none';
                    }
                }, 400);
            });
        });
    });

    // 7. Philosophy Accordion Tabs
    const pillarItems = document.querySelectorAll('.pillar-item');

    pillarItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Deactivate all items
            pillarItems.forEach(pi => {
                pi.classList.remove('active');
                const piIcon = pi.querySelector('.pillar-icon');
                if (piIcon) piIcon.setAttribute('data-lucide', 'plus');
            });

            // If it wasn't active, activate it
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.pillar-icon');
                if (icon) icon.setAttribute('data-lucide', 'minus');
            }

            // Refresh icons since we modified data-lucide attributes dynamically
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });

    // 8. FormSubmit Booking Inquiry AJAX Submission
    const bookingForm = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBtn');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Setup loading UI
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.innerText;
            btnText.innerText = "Transmitting...";
            submitBtn.disabled = true;

            const formData = new FormData(bookingForm);

            // Format parameters for FormSubmit JSON API
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            const submitUrl = bookingForm.getAttribute('action');

            fetch(submitUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formObject)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Submission failed');
            })
            .then(data => {
                // Success actions
                btnText.innerText = originalText;
                submitBtn.disabled = false;
                bookingForm.reset();

                // Show modal
                if (successModal) {
                    successModal.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                btnText.innerText = originalText;
                submitBtn.disabled = false;
                alert("There was an issue transmitting your inquiry. Please try again or contact us directly at studio@auraandarch.com.");
            });
        });
    }

    // Modal Close Trigger
    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });

        // Close on clicking outside container
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // 9. Newsletter Form Submission Handling
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            alert(`Thank you for subscribing with: ${input.value}`);
            newsletterForm.reset();
        });
    }
});
