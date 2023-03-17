// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 25,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
