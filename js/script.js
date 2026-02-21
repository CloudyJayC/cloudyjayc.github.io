/*===================== hamburger toggle ===============*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    navbar.classList.toggle('active');
};

menuIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuIcon.click();
    }
});


/*===================== light/dark mode toggle ===============*/
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Apply saved theme immediately on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.replace('bx-moon', 'bx-sun');
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
}

// On mobile, move theme toggle into header-icons so it sits next to hamburger
function placeThemeToggle() {
    const headerIcons = document.querySelector('.header-icons');
    const header = document.querySelector('.header');
    if (window.innerWidth <= 768) {
        if (!headerIcons.contains(themeToggle)) headerIcons.appendChild(themeToggle);
    } else {
        if (headerIcons.contains(themeToggle)) header.appendChild(themeToggle);
    }
}

placeThemeToggle();

// Debounced resize listener — avoids firing on every pixel
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(placeThemeToggle, 100);
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    themeToggle.classList.add('rotate');
    setTimeout(() => themeToggle.classList.remove('rotate'), 500);

    themeToggle.classList.replace(isLight ? 'bx-moon' : 'bx-sun', isLight ? 'bx-sun' : 'bx-moon');
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
});

themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
    }
});


/*================= scroll sections active link ===================*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

let scrollLock = false;
let scrollLockTimer = null;

function setScrollLock() {
    scrollLock = true;
    clearTimeout(scrollLockTimer);
    scrollLockTimer = setTimeout(() => { scrollLock = false; }, 800);
}

window.onscroll = () => {
    if (!scrollLock) {
        sections.forEach(sec => {
            const top    = window.scrollY;
            const offset = sec.offsetTop;
            const height = sec.offsetHeight;
            const id     = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    // Sticky navbar
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('open');
    navbar.classList.remove('active');
};


/*================== smooth nav link scrolling =================*/
document.addEventListener('DOMContentLoaded', () => {
    navLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));
            if (!target) return;
            setScrollLock();
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            navLinks.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // "View Experience" button in About section
    const viewExpBtn = document.querySelector('.about-content .btn[href="#experience"]');
    if (viewExpBtn) {
        viewExpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setScrollLock();
            window.scrollTo({ top: document.querySelector('#experience').offsetTop, behavior: 'smooth' });
            navLinks.forEach(t => t.classList.remove('active'));
            const expLink = document.querySelector('.navbar a[href="#experience"]');
            if (expLink) expLink.classList.add('active');
        });
    }
});


/*================== form validation =================*/
function validateForm() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill in all fields');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}


/*================== scroll reveal =================*/
const isMobile = window.innerWidth <= 768;

if (isMobile) {
    ScrollReveal({ reset: true, distance: '50px', duration: 1200, delay: 150 });
    ScrollReveal().reveal('.home-content, .heading',                                      { origin: 'bottom' });
    ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',                                { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-content',                             { origin: 'bottom' });
} else {
    ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content, .heading',                                      { origin: 'top'    });
    ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img',                                { origin: 'left'   });
    ScrollReveal().reveal('.home-content p, .about-content',                             { origin: 'right'  });
}


/*============== typed js ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Junior Developer', 'Problem Solver', 'Tech Enthusiast', 'Fast Learner', 'Team Player', 'Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
