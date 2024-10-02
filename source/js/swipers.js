import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const initHeroSwiper = () => {
  new Swiper('.hero__swiper', {

    modules: [Navigation, Pagination],

    loop: true,
    speed: 500,
    spaceBetween: 0,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    }
  });
};

const initProgramsSwiper = () => {
  new Swiper('.programs__swiper', {

    modules: [Navigation, Pagination, Scrollbar],

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

export { initHeroSwiper, initProgramsSwiper };
