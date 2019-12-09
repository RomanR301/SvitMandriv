let front = {

  hamburger: $('.hamburger'),
  hamburgerWrap: $('.hamburger-wrap'),
  nav: $('.header-mobile'),
  filterGridBtn: $('.filter-grid__btn'),
  header_drop: $('.header-drop'),
  slider_options_default: {
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      autoPlay: false,
      cellAlign: 'left',
      contain: true
  },

  init: function () {
      this.events();
  },

  newSlider: function (selector, options) {
      options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
      // let carousel = new Flickity(document.querySelector(selector), options);
      return new Flickity(document.querySelector(selector), options);
  },

//   toggleLang: function(){

//   },

  toggleNav: function () {
      if (!this.hamburger.hasClass('open')) {
          this.hamburger.addClass('open');
          this.nav.toggleClass('active');
          this.hamburgerWrap.toggleClass('active')
      } else {
          this.hamburger.removeClass('open');
          this.nav.toggleClass('active');
          this.hamburgerWrap.toggleClass('active')
      }
  },
  navMouseOver: function () {
      $(".primary-navigation .menu-item-has-children").hover(function () {
          $("body").addClass('BackDropped');
      }, function () {
          $("body").removeClass('BackDropped');
      });
  },

  toggleHeaderDrop: function () {
      if (!this.header_drop.hasClass('is-active')) {
          this.header_drop.addClass("is-active");
      } else {
          this.header_drop.removeClass("is-active");
      }
  },
  copyText: function () {
      let copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("copy");
  },
  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger-wrap', function () {
          self.toggleNav();
      });
      $(document).on('click', '.header-nav__link', function (e) {
          e.preventDefault();
          console.log($(window).width());
          if ($(window).width() + 16 < 991) {
              $(this).toggleClass('js-link-active');
          }
      });

      $(document).on('click', '.footer-navigation .menu-item-has-children > a', function (e) {
          e.preventDefault();
          if ($(window).width() + 16 < 991) {
              $(this).toggleClass('active');
          }
      });
      let langToggle = document.querySelector('.lang-select-wrapper') !== null;
      if (langToggle) {
          (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
              this.querySelector('.lang-select').classList.toggle('open');
              for (const option of document.querySelectorAll(".lang-option")) {
                  option.addEventListener('click', function() {
                      
                      if (!this.classList.contains('selected')) {
                          this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                          this.classList.add('selected');
                          this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                      }
                  })
              }
              window.addEventListener('click', function(e) {
                  const select = document.querySelector('.lang-select')
                  if (!select.contains(e.target)) {
                      select.classList.remove('open');
                  }
              });
          })
      }


      $('.js-scrollLink').on('click', function () {

          let target = this.hash;
          let $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 80
          }, 500, 'swing');
      });

      $(".scroll-downs").click(function () {
          $('html,body').animate({
                  scrollTop: $(".second").offset().top - 120
              },
              'slow');
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
  }
};


jQuery(function () {
  front.init();
  modal.init();


  // Hide Header on on scroll down
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = $('.header').outerHeight();

  $(window).scroll(function (event) {
      didScroll = true;
  });
});

// $(function(){
//   $("#header").load("header.html");
//   $("#footer").load("footer.html");
// });


// document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
//     this.querySelector('.custom-select').classList.toggle('open');
// })
// for (const option of document.querySelectorAll(".custom-option")) {
//     option.addEventListener('click', function() {
//         if (!this.classList.contains('selected')) {
//             this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
//             this.classList.add('selected');
//             this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
//         }
//     })
// }