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
});
