/* ==========================================================
   PREMIUM LOADER
========================================================== */

(() => {

    const loader = document.querySelector(".loader");
    const progress = document.querySelector(".loader-progress");

    if (!loader || !progress) return;

    let current = 0;
    let finished = false;

    /* ------------------------------------------
       Fake progress until page is ready
    ------------------------------------------- */

    const interval = setInterval(() => {

        if (finished) return;

        current += Math.random() * 8;

        if (current > 90) {

            current = 90;

        }

        progress.style.width = `${current}%`;

    }, 80);

    /* ------------------------------------------
       When page finishes loading
    ------------------------------------------- */

    window.addEventListener("load", () => {

        finished = true;

        clearInterval(interval);

        progress.style.width = "100%";

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 300);

        setTimeout(() => {

            loader.remove();

        }, 1200);

    });

})();
