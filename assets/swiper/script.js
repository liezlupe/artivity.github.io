// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   }
// });

var mySwiper = new Swiper ('.swiper-container', 
  {
    speed:1000,
    direction: 'horizontal',
    navigation: 
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: 
    {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    zoom: true,
    keyboard: 
    {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: 
    {
      invert: true,
    },
    autoplay: 
    {
      delay: 2000,
    },
    loop: true,
  });