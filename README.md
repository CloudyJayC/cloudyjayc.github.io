# Jason Cameron's Portfolio

A modern, responsive personal portfolio website showcasing projects, skills, and professional experience as a junior software developer. Built with vanilla HTML5, CSS3, and JavaScript featuring dark/light mode, smooth animations, and a fully functional contact form.

**Live Demo:** [cloudyjayc.github.io](https://cloudyjayc.github.io)

---

## ✨ Features

- **Responsive Design** — Mobile-first layout that adapts seamlessly to all screen sizes
- **Dark/Light Mode** — Theme toggle with persistent storage
- **Smooth Navigation** — Active link highlighting and smooth scroll behavior
- **Professional Portfolio** — Showcase of completed projects with detailed descriptions
- **Contact Form** — Functional form with validation using FormSubmit
- **Social Links** — Direct connections to GitHub and LinkedIn
- **Scroll Animations** — Reveal effects and dynamic text animations
- **Accessibility** — Semantic HTML with ARIA labels and keyboard navigation

---

## 📁 Project Structure

```
cloudyjayc.github.io/
├── index.html                       # Main portfolio page
├── 404.html                         # Custom error page
├── README.md                        # Project documentation
├── .gitignore                       # Git ignore rules
├── css/
│   └── style.css                    # Main stylesheet (1175 lines)
├── js/
│   └── script.js                    # JavaScript functionality
└── assets/
    ├── images/
    │   ├── Home.png                 # Hero section image
    │   └── About.png                # About section image
    └── documents/
        └── Jason Cameron CV.pdf     # Downloadable resume
```

---

## 🛠️ Technology Stack

- **HTML5** — Semantic markup for better performance and accessibility
- **CSS3** — Modern styling with CSS Grid, Flexbox, and CSS animations
- **JavaScript (Vanilla)** — No framework dependencies, lightweight and fast
- **External Libraries:**
  - [Boxicons](https://boxicons.com/) — Beautiful icon library
  - [ScrollReveal](https://scrollrevealjs.org/) — Scroll animations
  - [Typed.js](https://mattboldt.com/typed.js/) — Text animation effect
  - [FormSubmit](https://formsubmit.co/) — Form backend

---

## 🚀 About This Site

This is a **GitHub Pages** hosted portfolio website. The site is automatically deployed whenever changes are pushed to the `main` branch. No build process or deployment configuration needed—just push and it's live!

**Website:** [cloudyjayc.github.io](https://cloudyjayc.github.io)

### Deployment

GitHub Pages automatically publishes this repository:
- **Source:** `main` branch (root directory)
- **URL:** https://cloudyjayc.github.io
- **Custom Domain:** Not configured (using GitHub's default domain)
- **Automatic Deploys:** Enabled on every push

To customize GitHub Pages settings, visit: **Settings → Pages → Source**

---

## 🔧 Customization

### Update Personal Information
- **Content:** Edit section text in `index.html`
- **Social Links:** Update GitHub/LinkedIn URLs in the Home section
- **Typed Text:** Modify animation strings in `js/script.js`
  ```javascript
  strings: ['Your Title 1', 'Your Title 2', 'Your Title 3']
  ```

### Customize Styling
- **Colors:** Edit CSS variables in `css/style.css`
  ```css
  :root {
      --bg-color: #1f242d;
      --main-color: #0ef;
      /* ... */
  }
  ```
- **Fonts:** Update fonts in the `<head>` of `index.html`
- **Responsive Breakpoints:** Adjust media queries in `css/style.css`

### Add New Projects
1. Add a new portfolio box in the portfolio section:
   ```html
   <div class="portfolio-box">
       <div class="portfolio-layer">
           <h4>Project Title</h4>
           <p>Project description...</p>
           <div class="portfolio-tags">
               <span class="tech-tag">Tech</span>
           </div>
           <a href="https://github.com/..." target="_blank" class="portfolio-github-btn">
               <i class='bx bxl-github'></i> View on GitHub
           </a>
       </div>
   </div>
   ```
2. Add project image to `assets/images/`

---

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Mobile  | ✅ All modern browsers |

---

## 📋 Sections

- **Home** — Introduction and availability status
- **About** — Professional summary and quick statistics
- **Experience** — Internship and work history
- **Education** — Certifications and qualifications
- **Skills** — Technical and soft skills with tags
- **Portfolio** — Completed projects with GitHub links
- **Contact** — Functional contact form

---

## 🔗 Contact & Links

- **Website:** [cloudyjayc.github.io](https://cloudyjayc.github.io)
- **GitHub:** [CloudyJayC](https://github.com/CloudyJayC)
- **LinkedIn:** [Jason Cameron](https://www.linkedin.com/in/jason-cameron-69b080352/)
- **Email:** jwcameron3@gmail.com

---

## 📄 License

Copyright © 2026 Jason Cameron. All Rights Reserved.

This project is provided as-is for personal portfolio purposes. Feel free to modify for your own use.

---

**Last Updated:** February 2026
