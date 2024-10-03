import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const bullets = document.querySelectorAll('.hero__swiper-bullet');

const initHeroSwiper = () => {
  const swiperHero = new Swiper('.hero__swiper', {

    loop: true,
    speed: 500,
    spaceBetween: 0,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    }
  });

  // Функция для обновления активного слайда
  function updateActiveSlide(index) {
    swiperHero.slideTo(index);
  }

  // Добавляем событие клика на каждый bullet
  bullets.forEach((bullet) => {
    bullet.addEventListener('click', (event) => {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      updateActiveSlide(index);
    });
  });

  // Слушаем событие смены слайда и обновляем активный bullet
  swiperHero.on('slideChange', () => {
    const activeIndex = swiperHero.realIndex;
    bullets.forEach((bullet) => {
      const bulletIndex = parseInt(bullet.getAttribute('data-index'), 10);
      if (bulletIndex === activeIndex) {
        bullet.classList.add('hero__swiper-bullet--active');
      } else {
        bullet.classList.remove('hero__swiper-bullet--active');
      }
    });
  });
};


// Объявление Свайпера в блоке programs
const initProgramsSwiper = () => {
  new Swiper('.programs__swiper', {

    modules: [Navigation, Scrollbar],

    speed: 500,
    spaceBetween: 30,

    navigation: {
      prevEl: '.programs__swiper-button-prev',
      nextEl: '.programs__swiper-button-next',
    },

    breakpoints: {
      768: {
        width: 678,
        slidesPerView: 2,

        scrollbar: {
          el: '.programs__swiper-scrollbar',
          draggable: true,
          dragSize: '326',
        },
      },

      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,

        scrollbar: {
          el: '.programs__swiper-scrollbar',
          draggable: true,
          dragSize: '394',
        },
      },
    }
  });
};

const initTabSwiper = () => {
  new Swiper('.news__tab-swiper', {

    speed: 500,
    spaceBetween: 10,
    slidesPerView: 'auto',


    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    }
  });
};

export { initHeroSwiper, initProgramsSwiper, initTabSwiper };
