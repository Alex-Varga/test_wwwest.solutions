$(document).ready(function() {
  $('.burger-menu').click(function() {
      $('.burger-menu').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});




var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});