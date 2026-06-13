document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const body = document.body;

  burger.addEventListener('click', () => {
    // Переключаем классы
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    
    // Блокируем скролл сайта под открытым меню
    body.classList.toggle('no-scroll');
		const isOpen = burger.classList.contains('is-active');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Закрываем меню при клике на любую ссылку внутри него (полезно для якорей)
  const links = document.querySelectorAll('.header__link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-active');
      menu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  });
});

//Убрать подсказку при свайпе на секции с карточками//

document.addEventListener('DOMContentLoaded', () => {
  // Находим контейнер, который скроллится, и заголовок с подсказкой
  const scrollContainer = document.querySelector('.products__cards');
  const titleWithHint = document.querySelector('.card__image-wrapper--razor');

  // Проверяем, существуют ли эти элементы на странице
  if (scrollContainer && titleWithHint) {
    
    // Создаем функцию, которая будет проверять скролл
    const hideHintOnScroll = () => {
      // scrollLeft показывает, на сколько пикселей элемент прокручен влево.
      // Если больше 10 пикселей (защита от случайных микро-касаний), прячем текст!
      if (scrollContainer.scrollLeft > 10) {
        titleWithHint.classList.add('is-hidden');
        
        // ВАЖНО: Удаляем слушатель событий! 
        // Подсказка уже спрятана, нам больше не нужно следить за каждым миллиметром скролла.
        scrollContainer.removeEventListener('scroll', hideHintOnScroll);
      }
    };

    // Вешаем слушатель события 'scroll' на контейнер с карточками
    scrollContainer.addEventListener('scroll', hideHintOnScroll);
  }
});

if (window.innerWidth > 750) {
  document.querySelectorAll('.basics__video-desktop').forEach(video => {
    // Сохраняем результат попытки запуска в переменную
    const playPromise = video.play();

    // Если браузер поддерживает Promise для видео (все современные браузеры)
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Мы перехватили ошибку! 
        // Теперь она не вывалится красным в консоль.
        // Можно просто оставить блок пустым или вывести аккуратное сообщение:
        console.log("Видео не запущено: включен режим экономии энергии");
      });
    }
  });
}