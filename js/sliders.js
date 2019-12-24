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
  let newsSlider = document.querySelector('.news-carousel') !== null;
  let newsCarousel;
  if (newsSlider) {
    newsCarousel = front.newSlider('.news-carousel', {
      cellAlign: 'left', 
      prevNextButtons: true,
    })
  }

  $(document).on('click', '.--prev', function(){
    $('.previous').click();
  })
  $(document).on('click', '.--next', function(){
    $('.next').click();
  })


  let recomendationSlider = document.querySelector('.single-recomendation') !== null;
  let recomendationCarousel;
  if (recomendationSlider) {
    recomendationCarousel = front.newSlider('.single-recomendation', {
      cellAlign: 'left',
      prevNextButtons: true
    })
  }

  $(document).on('click', '.--prev-single', function(){
    $('.single-recomendation .previous').click();
  })
  
  $(document).on('click', '.--next-single', function(){
    $('.single-recomendation .next').click();
  })
  
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


  let treatmentCarousel = document.querySelector('.treatment-carousel') !== null;
  let treatmentSlider;
  if (treatmentCarousel) {
    treatmentSlider = front.newSlider('.treatment-carousel', {
      cellAlign: 'left', 
      prevNextButtons: true
    })
  }

  $(document).on('click', '.tab-treatment', function(){
    var $carousel = $('.treatment-carousel').flickity();
    $carousel.flickity('resize');
  })


  // let roomsMain = document.querySelectorAll('.rooms-carousel-main');
  // let roomsNav = document.querySelectorAll('.rooms-carousel-nav');
  // for ( var i=0, len = roomsMain.length; i < len; i++ ) {
  //   for ( var i=0, len = roomsNav.length; i < len; i++ ) {
  //     let roomsSlider = roomsMain[i];
  //     let roomsSliderNav = roomsNav[i];
  //     new Flickity( roomsSlider, {
  //         cellSelector: '.rooms-carousel-main__item',
  //         cellAlign: 'left',
  //         contain: true,
  //         prevNextButtons: true,
  //         pageDots: false,
  //         wrapAround: true
  //     }),
  //     new Flickity (roomsSliderNav, {
  //       asNavFor: roomsMain[i],
  //       pageDots: false,
  //       cellAlign: 'left',
  //       wrapAround: true,
  //       prevNextButtons: false,
  //       draggable: false
  //     });
  //   }
  // }

  $(document).on('click', '.tab-rooms', function(){
    let roomsMain = document.querySelectorAll('.rooms-carousel-main');
    let roomsNav = document.querySelectorAll('.rooms-carousel-nav');
    for ( var i=0, len = roomsMain.length; i < len; i++ ) {
      for ( var i=0, len = roomsNav.length; i < len; i++ ) {
        let roomsSlider = roomsMain[i];
        let roomsSliderNav = roomsNav[i];
        new Flickity( roomsSlider, {
            cellSelector: '.rooms-carousel-main__item',
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true
        }),
        new Flickity (roomsSliderNav, {
          asNavFor: roomsMain[i],
          pageDots: false,
          cellAlign: 'left',
          wrapAround: true,
          prevNextButtons: false,
          draggable: false
        });
      }
    }
  });
});




