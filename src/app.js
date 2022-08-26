/* src/app.js */
import 'bootstrap'
import Swiper, { Navigation, Pagination, Grid} from 'swiper';
// Styles
import 'styles/_app.scss'

new Swiper(".photo__swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".photo__slider-next",
    prevEl: ".photo__slider-prev",
  },
});

let popularSlider = new Swiper(".popular__slider", {
  modules: [Grid],
  slidesPerView: 1,
  spaceBetween: 30,
  observer: true,
  updateOnWindowResize: true,
  grid: {
    rows: 3,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
