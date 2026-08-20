document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const animated = [
    ...document.querySelectorAll('.process-step'),
    ...document.querySelectorAll('.route-item'),
    ...document.querySelectorAll('.feature'),
    ...document.querySelectorAll('.photo-story'),
    ...document.querySelectorAll('.owner-story'),
    ...document.querySelectorAll('.reviews'),
    ...document.querySelectorAll('.contact-inner')
  ];

  animated.forEach((el, index) => {
    el.classList.add('reveal');
    if (el.classList.contains('process-step')) {
      el.classList.add(`reveal-delay-${Math.min(index % 4, 3)}`);
    }
  });

  const processLine = document.querySelector('.process-line');

  if (!('IntersectionObserver' in window)) {
    animated.forEach(el => el.classList.add('is-visible'));
    if (processLine) processLine.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });

  animated.forEach(el => observer.observe(el));
  if (processLine) observer.observe(processLine);
});
