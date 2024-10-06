import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

const ACTIVE_SLIDES = 4;

const heroBullets = document.querySelectorAll('.hero__swiper-bullet');


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
  heroBullets.forEach((bullet) => {
    bullet.addEventListener('click', (event) => {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      updateActiveSlide(index);
    });
  });

  // Слушаем событие смены слайда и обновляем активный bullet
  swiperHero.on('slideChange', () => {
    const activeIndex = swiperHero.realIndex;
    heroBullets.forEach((bullet) => {
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
      768: {
        spaceBetween: 0,
        enabled: false,
      },
    }
  });
};

const initNewsSwiper = () => {
  const swiperNews = new Swiper('.news__content-swiper', {

    modules: [Navigation, Pagination, Grid],

    speed: 500,

    grid: {
      rows: 2,
      fill: 'row',
    },

    pagination: {
      el: '.news__content-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      prevEl: '.news__content-swiper-button-prev',
      nextEl: '.news__content-swiper-button-next',
    },


    breakpoints: {
      768: {
        width: 678,
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1440: {
        width: 1240,
        allowTouchMove: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,

        grid: {
          rows: 1,
        },
      },
    }
  });

  const newsBullets = document.querySelectorAll('.news__content-swiper-pagination .swiper-pagination-bullet');


  let bulletIndex = 0;

  // Добавляем цифры на bullet свайпера
  newsBullets.forEach((bullet) => {
    bulletIndex ++;
    bullet.textContent = `${bulletIndex}`;
  });

  // Делаем слайды видимыми если их меньше 4шт
  newsBullets.forEach((bullet) => bullet.classList.add('swiper-pagination-bullet--visible'));

  if (newsBullets.length > ACTIVE_SLIDES) {
    const bulletsArr = Array.from(newsBullets);

    let slidesPosition = 0;
    let newBulletsArr;

    const sliceSlides = (startBullet, lastBullet) => {
      newsBullets.forEach((bullet) => bullet.classList.remove('swiper-pagination-bullet--visible'));
      newBulletsArr = bulletsArr.slice(startBullet, lastBullet);
      newBulletsArr.forEach((bullet) => bullet.classList.add('swiper-pagination-bullet--visible'));
    };

    sliceSlides(slidesPosition, ACTIVE_SLIDES + slidesPosition);

    const sliceActualSlides = () => {
      newBulletsArr.find((element, index) => {
        if(element.classList.contains('swiper-pagination-bullet-active')) {

          // Когда обновление слайдов идет на возрастание
          if (index === ACTIVE_SLIDES - 1) {
            slidesPosition ++;
            sliceSlides(slidesPosition, ACTIVE_SLIDES + slidesPosition);

            if (newBulletsArr.length < ACTIVE_SLIDES) {
              slidesPosition --;
              sliceSlides(slidesPosition, ACTIVE_SLIDES + slidesPosition);
            }
            return true;
          }

          // Когда обновление слайдов идет на убывание
          if (index === 0) {
            if (slidesPosition === 0) {
              return true;
            }

            slidesPosition --;
            sliceSlides(slidesPosition, ACTIVE_SLIDES + slidesPosition);

            return true;
          }
        }
      });
    };

    swiperNews.on('slideChange', () => {
      sliceActualSlides();
    });
  }
};

const initReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {

    modules: [Navigation, Scrollbar],

    width: 290,
    speed: 500,
    spaceBetween: 30,

    navigation: {
      prevEl: '.reviews__swiper-button-prev',
      nextEl: '.reviews__swiper-button-next',
    },

    breakpoints: {
      768: {
        width: 560,
        slidesPerView: 1,

        scrollbar: {
          el: '.reviews__swiper-scrollbar',
          draggable: true,
          dragSize: '326',
        },
      },

      1440: {
        width: 1240,
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,

        scrollbar: {
          el: '.reviews__swiper-scrollbar',
          draggable: true,
          dragSize: '394',
        },
      },
    }
  });
};

export { initHeroSwiper, initProgramsSwiper, initTabSwiper, initNewsSwiper, initReviewsSwiper };

