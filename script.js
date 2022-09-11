var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      100: {
          slidesPerView: 1,
      },
      420: {
          slidesPerView: 2,
      },
      960: {
          slidesPerView: 3,
      },
       1260: {
           slidesPerView: 4,
       },
  },
});
//   Boat heAD JS
var swiper = new Swiper(".boatslide-cont", {
    slidesPerView: 1,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    scrollX:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function first(){
    document.getElementById("image").src="Slider Image/slide3.gif";
    
}
function fifth(){
    document.getElementById("image").src="Slider Image/misfit-2_1_1600x.png";
    
}
function Second(){
    document.getElementById("image").src="Slider Image/slide2.jpg";
    
}
setInterval(Second,3500);
setInterval(fifth,4500);
setInterval(first,6500);

function hideSidebar() {
  document.getElementById('openSideMenu').checked = false;
}

var sideIconToggle = document.getElementById('sidebarContainer');

document.addEventListener('click', function(event) {
  if (!sidebarContainer.contains(event.target))
//   hideSidebar();
});