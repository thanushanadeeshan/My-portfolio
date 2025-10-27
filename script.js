// small helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// menu toggle for mobile
const menuBtn = $('#menu-btn');
const nav = $('#nav');
menuBtn && menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// simple form submit (no backend) -> show alert and reset
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if(!name || !email){ alert('Please fill name and email.'); return; }
    alert('Thanks, ' + name + '! Your message was received (demo).');
    form.reset();
  });
}

// small reveal on scroll
const revealables = document.querySelectorAll('.card, .project, .service-card, .award');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealables.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.style.transform = 'translateY(0)', el.style.opacity = 1;
  });
};
revealables.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(20px)'; el.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)'; });
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// floating animation slight delays already in CSS

// Accessibility: Close mobile nav when clicking a link
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if(nav.classList.contains('open')) nav.classList.remove('open'); }));
