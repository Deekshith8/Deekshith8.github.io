/* ==========================================================
   DOM ELEMENTS
========================================================== */

const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

/* ==========================================================
   MOBILE MENU
========================================================== */

menuBtn?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active")
            ? "✕"
            : "☰";

});

/* Close menu after clicking */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

navItems.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(targetId);

        if (!target) return;

        const navHeight = navbar.offsetHeight;

        const y =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight;

        window.scrollTo({

            top: y,

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   NAVBAR SCROLL EFFECT
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const updateActiveNav = () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

};

window.addEventListener("scroll", updateActiveNav);

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealTargets = [

    ".section-heading",
    ".about-card",
    ".timeline-item",
    ".project-card",
    ".skill-card",
    ".contact-links"

];

revealTargets.forEach(selector => {

    document.querySelectorAll(selector)
        .forEach(el => el.classList.add("reveal"));

});

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold: 0.15,

        rootMargin: "0px 0px -80px 0px"

    }

);

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));

/* ==========================================================
   STAGGER PROJECT CARDS
========================================================== */

document
    .querySelectorAll(".project-card")
    .forEach((card, index) => {

        card.classList.add(`delay-${(index % 6) + 1}`);

    });

document
    .querySelectorAll(".skill-card")
    .forEach((card, index) => {

        card.classList.add(`delay-${(index % 6) + 1}`);

    });

/* ==========================================================
   ACTIVE NAV LINK STYLE
========================================================== */



/* ==========================================================
   ESC CLOSES MOBILE MENU
========================================================== */

document.addEventListener("keydown", e => {

    if (e.key !== "Escape") return;

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

});

/* ==========================================================
   CLICK OUTSIDE CLOSES MOBILE MENU
========================================================== */

document.addEventListener("click", e => {

    if (window.innerWidth > 768) return;

    if (
        navLinks.contains(e.target) ||
        menuBtn.contains(e.target)
    ) {
        return;
    }

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

});

/* ==========================================================
   HEADER OFFSET FOR HASH LINKS
========================================================== */

window.addEventListener("load", () => {

    if (!window.location.hash) return;

    const target = document.querySelector(window.location.hash);

    if (!target) return;

    const offset = navbar.offsetHeight;

    window.scrollTo({

        top: target.offsetTop - offset,

        behavior: "instant"

    });

});

/* ==========================================================
   PREVENT ANIMATION FLASH
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================================
   YEAR (OPTIONAL)
========================================================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Deekshith Adi H M`;

}
