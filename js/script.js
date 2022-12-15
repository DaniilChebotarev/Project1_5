const slider = document.querySelector('.swiper')

let mySwiper;

function moblileSlider() {
  if (window.innerWidth <= 424 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(".mySwiper", {
  
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
    
        clickable: true,
    },
      breakpoints: {
        550: {
          sliderPerViev: 3,
        },
      },
      });
      slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 424) {
    slider.dataset.mobile = 'false';

    
  }
};

moblileSlider()

window.addEventListener('resize', () => {
  moblileSlider();
});


/* button*/

let button = document.querySelector('.swiper__more') ;
    button.addEventListener('click', function() {
  document.querySelector('.swiper-wrapper').style.maxHeight = '1000px';
    button.style.display = 'none';
  document.querySelector('.swiper__close').style.display = 'block';
})


let button_close = document.querySelector('.swiper__close') ;
    button_close.addEventListener('click', function() {
  document.querySelector('.swiper-wrapper').style.maxHeight = '170px';
    button_close.style.display = 'none';
  document.querySelector('.swiper__more').style.display = 'block';
})
