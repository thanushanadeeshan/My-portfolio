const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// 1. Set Footer Year
$('#year').textContent = new Date().getFullYear();

// 2. Header Visibility (Hide on scroll down, show on scroll up)
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const header = $('#mainHeader');
    if (window.scrollY > 100 && window.scrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

// 3. Scroll Spy (Highlight active nav link)
const sections = $$('section');
const navLinks = $$('.nav a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 4. Scroll Reveal (Fade in animations)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

$$('.card, .project-card, .service-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    revealObserver.observe(el);
});

// 5. EmailJS Integration
$('#contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = $('#submitBtn');
    btn.innerText = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm('service_w3osi9u', 'template_ft708g5', this)
        .then(() => {
            alert('Success! Message sent to Thanusha.');
            btn.innerText = 'Send Message';
            btn.disabled = false;
            this.reset();
        }, (err) => {
            alert('Error sending message. Please try again.');
            btn.innerText = 'Send Message';
            btn.disabled = false;
            console.error('EmailJS Error:', err);
        });
});

// 6. Mobile Menu Toggle
$('#menu-btn')?.addEventListener('click', () => $('#nav').classList.toggle('open'));