window.addEventListener('DOMContentLoaded', function () {
  new Swiper ('.section-hero__slider', {
    loop: true,
    speed: 800,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 10000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
  });
});
