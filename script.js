// Reveal sections as they enter the viewport
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

// Fill in today's date in the title block, formatted like a drawing date stamp
const dateEl = document.getElementById('today');
if (dateEl) {
  const now = new Date();
  const formatted = now.toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: '2-digit'
  });
  dateEl.textContent = formatted;
}
