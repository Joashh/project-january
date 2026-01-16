document.addEventListener('DOMContentLoaded', () => {
  const slideElements = document.querySelectorAll('.slide-from-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once active
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // triggers when 20% of element is visible
  });

  slideElements.forEach(el => observer.observe(el));
});
