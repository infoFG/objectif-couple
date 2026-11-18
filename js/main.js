// Objectif-Couple — navigation mobile
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var list = document.querySelector('.nav__list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
