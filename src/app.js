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

new Swiper(".stock__swiper", {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".stock__slider-next",
    prevEl: ".stock__slider-prev",
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


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [50.599863, 36.573775],
      zoom: 17,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/images/logo.svg',
      // Размеры метки.
      iconImageSize: [80, 80],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-40, -40]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
