const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.classList.toggle('active', filter === button));
  const category = button.dataset.filter;
  projects.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

const modal = document.querySelector('.video-modal');
const modalVideo = modal?.querySelector('video');
const modalTitle = modal?.querySelector('.modal-title');
document.querySelectorAll('.project-media').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.dataset.video;
    if (!source || !modal || !modalVideo) return;
    modalTitle.textContent = button.dataset.title || 'PROJECT';
    modalVideo.src = source;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});
function closeModal() {
  if (!modal || !modalVideo) return;
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modal.close();
}
modal?.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
modal?.addEventListener('close', () => {
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
  }
});

// Hide the showreel placeholder only when a real local video can play.
const heroVideo = document.querySelector('.hero-video');
const placeholder = document.querySelector('.video-placeholder');
heroVideo?.addEventListener('canplay', () => {
  if (heroVideo.videoWidth > 0 && placeholder) placeholder.style.display = 'none';
});
heroVideo?.addEventListener('error', () => {
  if (placeholder) placeholder.style.display = 'flex';
});

// Gentle reveal-on-scroll, with a safe fallback if IntersectionObserver is unavailable.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
