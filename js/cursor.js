/* ==========================================================
   PREMIUM CUSTOM CURSOR
========================================================== */

(() => {

    // Disable on touch devices
    if (
        window.matchMedia("(hover: none)").matches ||
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    if (!dot || !ring) return;

    // Elements that should trigger the hover effect
    const hoverTargets = document.querySelectorAll(
        `
        a,
        button,
        .primary-btn,
        .secondary-btn,
        .project-card,
        .skill-card,
        .tech-stack span,
        .hero-tech span,
        .contact-links a
        `
    );

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    const speed = 0.18;

    /* ----------------------------------------
       Mouse Move
    ---------------------------------------- */

    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform =
            `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    });

    /* ----------------------------------------
       Smooth Ring Animation
    ---------------------------------------- */

    function animate() {

        ringX += (mouseX - ringX) * speed;
        ringY += (mouseY - ringY) * speed;

        ring.style.transform =
            `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(animate);

    }

    animate();

    /* ----------------------------------------
       Hover Effect
    ---------------------------------------- */

    hoverTargets.forEach(el => {

        el.addEventListener("mouseenter", () => {

            ring.classList.add("hover");
            dot.classList.add("hover");

        });

        el.addEventListener("mouseleave", () => {

            ring.classList.remove("hover");
            dot.classList.remove("hover");

        });

    });

    /* ----------------------------------------
       Click Effect
    ---------------------------------------- */

    window.addEventListener("mousedown", () => {

        ring.classList.add("click");
        dot.classList.add("click");

    });

    window.addEventListener("mouseup", () => {

        ring.classList.remove("click");
        dot.classList.remove("click");

    });

    /* ----------------------------------------
       Hide Cursor Outside Window
    ---------------------------------------- */

    document.addEventListener("mouseleave", () => {

        ring.classList.add("cursor-hidden");
        dot.classList.add("cursor-hidden");

    });

    document.addEventListener("mouseenter", () => {

        ring.classList.remove("cursor-hidden");
        dot.classList.remove("cursor-hidden");

    });

})();
