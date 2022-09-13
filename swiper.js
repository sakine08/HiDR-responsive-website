/*

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 10,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// breakpoints : 780 : transition speed

// nextEl: ".swiper-button-next",
// prevEl: ".swiper-button-prev",

*/


// media query

/* 
get widht and height of body 

var height = document.body.clientHeight;
var width = document.body.clientWidth; 

*/


// function for calculating client width and  set number of navbar link
let changeSize = ()=>{
  let height = document.body.clientHeight;
  let  width = document.body.clientWidth;
  let navBarNum = 0;
  if ( width > 992) {
    navBarNum = 8;
  }
  else if(width <= 992 && width >786){
    navBarNum = 7;
  }
  else if (width <= 786 && width >576){
    navBarNum = 6;
  }else if(width <=576){
    navBarNum = 4;
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      200: {
        slidesPerView:navBarNum,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}

changeSize();