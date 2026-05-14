document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Chart Placeholders (Simple visual bars)
    const bars = document.querySelectorAll('.stat-bar');
    bars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 500);
    });
});
