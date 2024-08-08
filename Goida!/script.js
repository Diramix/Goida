setInterval(() => {
    imgBackground = ("http://127.0.0.1:2007/assets/fullscreen.gif");

    if (imgBackground) {
        const targetElement = document.querySelector('.FullscreenPlayerDesktop_modalContent__Zs_LC');
        if (targetElement) {

            const currentBackground = targetElement.style.background;

            const newBackground = `linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.75) 100%), url(${imgBackground}) center center / cover no-repeat`;

            const img = new Image();
            img.src = imgBackground;

            img.onload = () => {

                if (currentBackground !== newBackground) {
                    targetElement.style.background = newBackground;
                }
            };

            img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${imgBackground}`);
            };
        }
    }
}, 500);