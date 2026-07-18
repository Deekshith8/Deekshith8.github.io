/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

.scroll-progress {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 3px;

    z-index: 999999;

    pointer-events: none;

}

/* ----------------------------------------- */

.scroll-progress-bar {

    width: 0%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            #ffffff,
            rgba(255,255,255,.85)
        );

    transform-origin: left center;

    box-shadow:
        0 0 12px rgba(255,255,255,.30);

    transition:
        width .08s linear;

}
