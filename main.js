// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('a, .roast-card, .footer-brand');

document.addEventListener('mousemove', (e) => {
  // Move cursor to pointer position
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Scroll Reveal Observer
const fadeElements = document.querySelectorAll('.fade-in');

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

fadeElements.forEach(el => {
  revealObserver.observe(el);
});

// Initial load animation for hero text (simulating stagger)
window.addEventListener('load', () => {
  const heroRevealText = document.querySelectorAll('.reveal-text');
  heroRevealText.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
    // Force reflow
    void el.offsetWidth;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + (index * 200));
  });
});
