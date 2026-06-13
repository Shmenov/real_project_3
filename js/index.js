document.addEventListener('DOMContentLoaded', () => {

    // Бургер-меню
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('is-active');
        menu.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll');
        burger.setAttribute('aria-expanded', isOpen);
    });

    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('is-active');
            menu.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
            burger.setAttribute('aria-expanded', false);
        });
    });

    // Скрываем подсказку после свайпа
    const scrollContainer = document.querySelector('.products__cards');
    const razorCard = document.querySelector('.card__image-wrapper--razor');

    if (scrollContainer && razorCard) {
        const hideHint = () => {
            if (scrollContainer.scrollLeft > 10) {
                razorCard.classList.add('is-hidden');
                scrollContainer.removeEventListener('scroll', hideHint);
            }
        };
        scrollContainer.addEventListener('scroll', hideHint);
    }

    // Автозапуск видео
    document.querySelectorAll('.basics__video-desktop').forEach(video => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log('Видео не запущено: режим экономии энергии');
            });
        }
    });

});