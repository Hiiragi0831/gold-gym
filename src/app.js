/* src/app.js */
import 'bootstrap'
import Swiper, { Navigation, Pagination, Grid, Autoplay} from 'swiper';
import IMask from "imask";
import SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import AOS from 'aos';

// Styles
import 'simplebar/dist/simplebar.css';
import 'aos/dist/aos.css';
import 'styles/_app.scss'


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    let photoSlider = new Swiper(".photo__swiper", {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: ".photo__slider-next",
        prevEl: ".photo__slider-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    let popularSlider = new Swiper(".popular__slider", {
      modules: [Grid, Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      observer: true,
      updateOnWindowResize: true,
      grid: {
        rows: 1,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          grid: {
            rows: 1,
          },
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        1024: {
          slidesPerView: 3,
          grid: {
            rows: 3,
          },
        },
      },
      navigation: {
        nextEl: ".popular__slider-next",
        prevEl: ".popular__slider-prev",
      },
    });

    let stockSlider = new Swiper(".stock__swiper", {
      modules: [Navigation, Autoplay],
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".stock__slider-next",
        prevEl: ".stock__slider-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });

    document.querySelectorAll('.js-phone-mask').forEach(item => {
      IMask(item, {mask: '+{7} (000) 000-00-00', lazy: false,});
    })

    const tab = document.querySelectorAll(".tab");

    tab.forEach(item => {
      item.querySelectorAll('.tab__item').forEach(tabItem => {
        tabItem.querySelector('.tab__title').addEventListener('click', () => {
          item.querySelector('.tab__title.is-active').classList.remove('is-active');
          item.querySelector('.tab__body.is-active').classList.remove('is-active');

          tabItem.querySelector('.tab__title').classList.add('is-active');
          tabItem.querySelector('.tab__body').classList.add('is-active');
        })
      })
    });

    new SimpleBar(document.querySelector(".schedule__table"));

    document.querySelector('.header__burger').addEventListener("click", () => {
      document.querySelector('.header__burger').classList.toggle('is-active');
      document.querySelector(".header-mobile").classList.toggle('is-active');
      document.querySelector(".header").classList.toggle('is-active');
      document.querySelector("body").classList.toggle('body-lock');
    })

    document.querySelectorAll('.header__menu-item').forEach(item => {
      item.addEventListener("click", () => {
        document.querySelector('.header__burger.is-active').classList.remove('is-active');
        document.querySelector(".header-mobile.is-active").classList.remove('is-active');
        document.querySelector(".header.is-active").classList.remove('is-active');
        document.querySelector("body.body-lock").classList.remove('body-lock');
      })
    })

    const lesson = document.querySelector(".schedule__table").querySelectorAll('.schedule__td');

    lesson.forEach(item => {
      item.querySelector('.schedule__td-lesson').addEventListener('mouseover', () => {
        lesson.forEach(i => {
          if (item.querySelector('.schedule__td-lesson').innerHTML === i.querySelector('.schedule__td-lesson').innerHTML) {
            i.classList.add('is-active');
          }
        })
      })

      item.querySelector('.schedule__td-lesson').addEventListener('mouseout', () => {
        document.querySelector(".schedule__table").querySelectorAll('.schedule__td.is-active').forEach(i => {
          i.classList.remove('is-active');
        });
      })
    })

    AOS.init();
  });
});
