// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// Add scroll event listeners
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelector('.glass-nav').style.background = 
        `rgba(255, 255, 255, ${Math.min(scrolled / 200, 0.1)})`;
});