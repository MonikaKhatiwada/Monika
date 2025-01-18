// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trigger animation after page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.animation = 'fadeInUp 1s forwards';
        }, index * 300);
    });
});