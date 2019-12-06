window.addEventListener("load", function () {
  $(".carousel").addClass("loadSlider");
});

jQuery(function () {
  /*home*/
  let primaryScreenCarousel = document.querySelector('.primary-screen-carousel') !== null;
  var mainCarousel;
  if (primaryScreenCarousel) {
      mainCarousel = front.newSlider('.primary-screen-carousel', {
          cellAlign: 'left',
          // contain: false,
          // pageDots: true,
          // autoPlay: true,
          // autoPlay: 5000,
          // verticalCells: true,
          prevNextButtons: false
      });
  }

  // let bannerCarousel = document.querySelector('.banner-carousel-main') !== null;
  // let banner;
  // if (bannerCarousel) {
  //   banner = front.newSlider('.banner-carousel-main', {
  //     cellAlign: 'left'
  //   })
  // }

  // let bannerCarouselNav = document.querySelector('.banner-carousel-nav') !== null;
  // let bannerNav;
  // if (bannerCarouselNav) {
  //   bannerNav = front.newSlider('.banner-carousel-nav', {
  //     asNavFor: '.banner-carousel-main',
  //     cellAlign: 'left',
  //     accessibility: false,
  //   })
  // }


});



// $('.banner-carousel-main').flickity({
//   pageDots: false,
//   prevNextButtons: false
// })
// // 2nd carousel, navigation

// $('.banner-carousel-nav').flickity({
//   asNavFor: '.banner-carousel-main',
//   // contain: true,
//   pageDots: false,
//   prevNextButtons: false

// });

// external js: flickity.pkgd.js

// external js: flickity.pkgd.js

var $carousel = $('.banner-carousel-main').flickity({
  prevNextButtons: false,
  wrapAround: true,
  pageDots: false
});
// Flickity instance
var flkty = $carousel.data('flickity');
// elements
var $cellButtonGroup = $('.banner-carousel-nav');
var $cellButtons = $cellButtonGroup.find('.button');

// update selected cellButtons
$carousel.on( 'select.flickity', function() {
  $cellButtons.filter('.is-selected')
    .removeClass('is-selected');
  $cellButtons.eq( flkty.selectedIndex )
    .addClass('is-selected');
});

// select cell on button click
$cellButtonGroup.on( 'click', '.button', function() {
  var index = $(this).index();
  $carousel.flickity( 'select', index );
});
// previous
$('.banner-previous').on( 'click', function() {
  $carousel.flickity('previous');
});
// next
$('.banner-next').on( 'click', function() {
  $carousel.flickity('next');
});

