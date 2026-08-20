document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const glowStyle = document.createElement('style');
  glowStyle.textContent = `
    .section:not(.reviews),
    .process-section,
    .photo-story-text,
    .owner-copy,
    .contact {
      background-image: radial-gradient(circle at 100% 100%, rgba(243,196,0,.13) 0%, rgba(243,196,0,.055) 20%, rgba(243,196,0,.018) 38%, transparent 58%);
      background-repeat: no-repeat;
    }
    .process-section {
      background-image:
        radial-gradient(circle at 100% 100%, rgba(243,196,0,.11) 0%, rgba(243,196,0,.045) 22%, transparent 56%),
        linear-gradient(180deg,#0b0b0c 0%,#101012 100%);
    }
    .contact {
      background-image: radial-gradient(circle at 100% 100%, rgba(243,196,0,.16) 0%, rgba(243,196,0,.065) 24%, rgba(243,196,0,.02) 42%, transparent 62%);
    }
    .photo-story-text,
    .owner-copy {
      background-color:#111113;
    }
    @media (max-width:560px) {
      .section:not(.reviews),
      .process-section,
      .photo-story-text,
      .owner-copy,
      .contact {
        background-size: 145% 145%;
        background-position: 100% 100%;
      }
    }
  `;
  document.head.appendChild(glowStyle);

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
