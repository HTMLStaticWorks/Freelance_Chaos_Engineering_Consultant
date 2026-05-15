document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Theme Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggles.forEach(btn => btn.innerHTML = '<i class="fas fa-sun"></i>');
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggles.forEach(btn => {
                btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        });
    });

    // RTL Toggle
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
        });
    });

    // Check saved direction
    const savedDir = localStorage.getItem('dir');
    if (savedDir) {
        document.documentElement.setAttribute('dir', savedDir);
    }

    // Form Validation (Placeholder)
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.style.borderColor = 'var(--accent-color)';
                } else {
                    input.style.borderColor = 'var(--glass-border)';
                }
            });
            if (valid) {
                alert('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
});
