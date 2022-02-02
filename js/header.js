window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#search__button').addEventListener('click', function () {
    document.querySelector('.search__form-shell').classList.add('is-active');
    document.body.classList.add('_lock');
    document.querySelector('.header__search-dimme').classList.add('blackout-active');
    document.querySelector('.search__button').classList.add('position-active');
  });

  document.querySelector('.search__button-back').addEventListener('click', function () {
    document.querySelector('.search__form-shell').classList.remove('is-active');
    document.body.classList.remove('_lock');
    document.querySelector('.header__search-dimme').classList.remove('blackout-active');
    document.querySelector('.search__button').classList.remove('position-active');
  });

  // Фон
  document.querySelector('.header__search-dimme').addEventListener('click', function () {
    document.querySelector('.search__form-shell').classList.remove('is-active');
    document.body.classList.remove('_lock');
    document.querySelector('.header__search-dimme').classList.remove('blackout-active');
    document.querySelector('.search__button').classList.remove('position-active');
  });

  // Бургер
  const headerBurger = document.querySelector('.header__burger');
  const navList = document.querySelector('.nav__list');
  if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
      headerBurger.classList.toggle('is-active');
      navList.classList.toggle('is-active');
      document.body.classList.toggle('_lock-burger');
    });
  };
});


