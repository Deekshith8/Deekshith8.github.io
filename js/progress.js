/* ==========================================================
   SCROLL PROGRESS
========================================================== */

(() => {

    const progressBar = document.querySelector(".scroll-progress-bar");

    if (!progressBar) return;

    let ticking = false;

    function updateProgress() {

        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        progressBar.style.width = `${percentage}%`;

        ticking = false;

    }

    window.addEventListener("scroll", () => {

        if (!ticking) {

            requestAnimationFrame(updateProgress);

            ticking = true;

        }

    }, { passive: true });

    updateProgress();

})();
