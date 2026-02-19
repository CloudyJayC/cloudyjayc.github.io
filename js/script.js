/*===================== hamburger toggle ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('open');
    navbar.classList.toggle('active');
};

// Keyboard support for hamburger
menuIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuIcon.click();
    }
});


/*===================== light/dark mode toggle ===============*/
const themeToggle = document.createElement('i');
themeToggle.className = 'bx bx-moon';
themeToggle.id = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Toggle light/dark mode');
themeToggle.setAttribute('role', 'button');
themeToggle.setAttribute('tabindex', '0');
// Append into header-icons group so it sits next to hamburger on mobile
const headerIcons = document.querySelector('.header-icons');
headerIcons.appendChild(themeToggle);

const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.replace('bx-moon', 'bx-sun');
}

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
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
                });
            };
        });
    }

    /*======================= sticky navbar ===========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================== close menu on scroll ==========*/
    menuIcon.classList.remove('open');
    navbar.classList.remove('active');
};


/*================== scroll reveal =================*/
const isMobile = window.innerWidth <= 768;

if (isMobile) {
    ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 1200,
        delay: 150
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'bottom' });
    ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });
} else {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}


/*============== typed js ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Junior Developer', 'Problem Solver', 'Tech Enthusiast', 'Fast Learner', 'Team Player', 'Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
