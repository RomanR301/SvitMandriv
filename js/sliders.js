window.addEventListener("load", function () {
  $(".carousel").addClass("loadSlider");
});

jQuery(function () {
  /*home*/
  let primaryScreenCarousel = document.querySelector('.primary-screen-carousel') !== null;
  let mainCarousel;
  if (primaryScreenCarousel) {
      mainCarousel = front.newSlider('.primary-screen-carousel', {
          cellAlign: 'left',
          prevNextButtons: true
      });
  }
  let bannerCarousel = document.querySelector('.banner-carousel-desktop') !== null;
  let bannerSlider;
  if (bannerCarousel) {
    bannerSlider = front.newSlider('.banner-carousel-desktop', {
      cellAlign: 'left', 
      prevNextButtons: true,
    })
  }

  let bannerCarouselMobile = document.querySelector('.banner-carousel-mobile') !== null;
  let bannerSliderMobile;
  if (bannerCarouselMobile) {
    bannerSliderMobile = front.newSlider('.banner-carousel-mobile', {
      cellAlign: 'left', 
      prevNextButtons: true
    })
  }

  let treatmentCarousel = document.querySelector('.single-treatment-carousel') !== null;
  let treatmentSlider;
  if (treatmentCarousel) {
    treatmentSlider = front.newSlider('.single-treatment-carousel', {
      cellAlign: 'left', 
      prevNextButtons: true,
      fullscreen: true
    })
  }

  let roomsMain = document.querySelectorAll('.rooms-main-carousel');
  for ( var i=0, len = roomsMain.length; i < len; i++ ) {
      let productSlider = roomsMain[i];
      new Flickity( productSlider, {
          cellSelector: '.rooms-main-carousel__item',
          cellAlign: 'left',
          contain: true,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: true
      });
  }
});


// var $bannerCarousel = $('.banner-carousel-main').flickity({
//   prevNextButtons: false,
//   wrapAround: true,
//   pageDots: false
// });

// // Flickity instance
// var flkty = $bannerCarousel.data('flickity');
// // elements
// var $cellButtonGroup = $('.banner-carousel-nav');
// var $cellButtons = $cellButtonGroup.find('.button');

// $bannerCarousel.on( 'select.flickity', function() {
//   $cellButtons.filter('.is-selected')
//     .removeClass('is-selected');
//   $cellButtons.eq( flkty.selectedIndex )
//     .addClass('is-selected');
// });


// $cellButtonGroup.on( 'click', '.button', function() {
//   var index = $(this).index();
//   $bannerCarousel.flickity( 'select', index );
// });

// $('.banner-previous').on( 'click', function() {
//   $bannerCarousel.flickity('previous');
// });

// $('.banner-next').on( 'click', function() {
//   $bannerCarousel.flickity('next');
// });

