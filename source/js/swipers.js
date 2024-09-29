import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const initHeroSwiper = () => {
  new Swiper('.swiper--hero', {

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

export { initHeroSwiper };
