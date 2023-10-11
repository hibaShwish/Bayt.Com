
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

   var btns = document.querySelectorAll(".active-links li");
   Array.from(btns).forEach(item => {
      item.addEventListener("click", () => {
         var selected = document.getElementsByClassName("active");
         selected[0].className = selected[0].className.replace(" active", "");
         item.className += " active";
      });
      
   });
   const mediaQuery = window.matchMedia('(max-width: 590px)')
   // Check if the media query is true
   if (mediaQuery.matches) {
    w3_open();
   }


   function w3_open() {
    sidebar=document.getElementById("mySidebar");
    condition=sidebar.classList.contains('none');
    if (condition) {
      sidebar.classList.add('block');
      sidebar.classList.remove('none');
    }
    else{
      sidebar.classList.remove('block');
      sidebar.classList.add('none');
    }
  }



 
