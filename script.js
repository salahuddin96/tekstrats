// script.js
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quad'
});

// Add scroll effect for navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});