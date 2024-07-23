setInterval(() => {
    imgBackground = ("http://127.0.0.1:19582/assets/fullscreen.gif");

    if (imgBackground) {
        const targetElement = document.querySelector('.FullscreenPlayerDesktop_content__bl_7V');
        if (targetElement) {
            targetElement.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.75) 100%), url(${imgBackground}) center center / cover no-repeat`;
        }
    }
}, 0);