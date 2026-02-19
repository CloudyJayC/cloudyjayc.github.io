/*===================== toggle icon ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*===================== light/dark mode toggle ===============*/
const themeToggle = document.createElement('i');
themeToggle.className = 'bx bx-moon';
themeToggle.id = 'theme-toggle';
document.querySelector('.header').appendChild(themeToggle);

const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.replace('bx-moon', 'bx-sun');
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Animate icon
    themeToggle.classList.add('rotate');
    setTimeout(() => themeToggle.classList.remove('rotate'), 500);

    // Swap icons
    themeToggle.classList.replace(isLight ? 'bx-moon' : 'bx-sun', isLight ? 'bx-sun' : 'bx-moon');
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
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop; 
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height) {
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

/*====================== remove toggle icon and navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================== scroll reveal =================*/
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


/*============== typed js ===========*/

const typed = new Typed ('.multiple-text',{
    strings: ['Software Developer', 'Junior Developer', 'Problem Solver', 'Tech Enthusiast', 'Fast Learner', 'Team Player', 'Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
