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
          prevNextButtons: false
      });
  }
});


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

$carousel.on( 'select.flickity', function() {
  $cellButtons.filter('.is-selected')
    .removeClass('is-selected');
  $cellButtons.eq( flkty.selectedIndex )
    .addClass('is-selected');
});


$cellButtonGroup.on( 'click', '.button', function() {
  var index = $(this).index();
  $carousel.flickity( 'select', index );
});

$('.banner-previous').on( 'click', function() {
  $carousel.flickity('previous');
});

$('.banner-next').on( 'click', function() {
  $carousel.flickity('next');
});

