// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { addSwitcherBurger, listMenuOpener } from './nav-switcher.js';
import { initHeroSwiper, initProgramsSwiper } from './swipers.js';
import { openModal, addFormValidate } from './modal-validate.js';


addSwitcherBurger();
listMenuOpener();
initHeroSwiper();
openModal();
addFormValidate();
initProgramsSwiper();
