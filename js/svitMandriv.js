let front = {

  hamburger: $('.hamburger'),
  hamburgerWrap: $('.hamburger-wrap'),
  subMenu: $('.sub-menu'),
  nav: $('.header-mobile'),
  filterGridBtn: $('.filter-grid__btn'),
  header_drop: $('.header-drop'),
  slider_options_default: {
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      autoPlay: false,
      cellAlign: 'left',
      contain: true,
      selectedAttraction: 0.01,
      friction: 0.15
  },

  init: function () {
      this.events();
  },

  newSlider: function (selector, options) {
      options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
      // let carousel = new Flickity(document.querySelector(selector), options);
      return new Flickity(document.querySelector(selector), options);
  },

  toggleNav: function () {
      if (!this.hamburger.hasClass('open')) {
          this.hamburger.addClass('open');
          this.nav.toggleClass('active');
          this.hamburgerWrap.toggleClass('active');
          $('body').addClass('preventScrolling');
      } else {
          this.hamburger.removeClass('open');
          this.nav.toggleClass('active');
          this.hamburgerWrap.toggleClass('active');
          this.subMenu.removeClass('open');
          this.subMenu.find('p.nav-title').remove();
          $('body').removeClass('preventScrolling');
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
        //   self.removeTitle();
      });

      $(document).on('click', '.open-treatment', function(){
        $('.tab-treatment').click();
        $('.treatment-carousel').flickity('resize');
      })

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

//   let sidebar = document.querySelector('#sidebar') !== null;
//   if (sidebar) {
//         sidebar = new StickySidebar('#sidebar', {
//         containerSelector: '#main-content',
//         innerWrapperSelector: '.sidebar__inner',
//         topSpacing: 10,
//         bottomSpacing: 10,
//         minWidth: 992,
//         resizeSensor: true
//         });
//     }
});


document.addEventListener("DOMContentLoaded", function (event) {

    let childrenItem = document.querySelectorAll('.menu-item-has-children > a');
    for (let i = 0; i < childrenItem.length; i++) {
        //console.log(childrenItem[i]);
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.className = "nav-btn";                    // add class
        btn.innerHTML = `<i class="icon-arrow-bottom"></i>`;
        childrenItem[i].appendChild(btn);
    }
});

$(document).on('click', '.nav-btn', function (e) {
    e.preventDefault();
    var navTitle = document.createElement("p");   // Create a <button> element
    navTitle.className = "nav-title";                    // add class
    navTitle.innerHTML = '<i class="icon-cheveron-left"></i>'  + $(this).parent().text();
    $(this).parent().next('.sub-menu').prepend(navTitle);
    if (!$(this).parent().next('.sub-menu').hasClass('open')) {
        $(this).parent().next('.sub-menu').addClass('open');
    } else {
        $(this).parent().next('.sub-menu').removeClass("open");
    }
});

$(document).on('click', '.nav-title', function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass('open')) {
        $(this).parent().removeClass("open");
        $(this).remove();
    }
});



$(document).on('click', '.arrow', function (t) {
    t.preventDefault(),
    $(this).parent().parent().hasClass("isOpen") ? $(this).parent().parent().removeClass("isOpen") : ($(".secondary-menu li").removeClass("isOpen"),
    $(this).parent().parent().addClass("isOpen")),
    $(".secondary-menu li.has-child").each(function(t) {
        $(".secondary-menu li.has-child").eq(t).hasClass("isOpen") ? $(".secondary-menu li.has-child").eq(t).find(".sub-menu").addClass('open') : $(".secondary-menu li.has-child .sub-menu").eq(t).removeClass('open')
    });
})

$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".secondary-menu-item");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.sub-menu').removeClass('open');
        container.removeClass('isOpen');
    }
})


$(document).click(function(){
    if ($('.secondary-menu-item').hasClass('isOpen')){
        $(this).removeClass('isOpen');
    }
})



$(document).on('click', '.sidenav__toggle', function (e){
    e.preventDefault();
    var $this = $(this);
    var $arrow = $this.find('.icon-arrow-bottom');
    $this.parent().parent().find('.icon-arrow-bottom').removeClass('navOpen');
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .sidenav-menu').removeClass('show');
        $this.parent().parent().find('li .sidenav-menu').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $arrow.addClass('navOpen');
    }
});

$(document).on('click', '.faq__item_heading', function (){
    var $this = $(this);
    $this.parent().parent().parent().find('.faq__item_arrow').removeClass('open');
    if ($this.parent().find('.faq__item_content').hasClass('show')) {
        $this.parent().find('.faq__item_content').removeClass('show')
        $this.parent().find('.faq__item_content').slideUp(350);
    } else {
        $this.parent().parent().find('.faq__item_content').removeClass('show');
        $this.parent().parent().find('.faq__item_content').slideUp(350);
        $this.parent().find('.faq__item_arrow').addClass('open');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350); 
    }
});

$(document).on('click', '.rooms-info-accordion__item', function (){
    var $this = $(this);
    var $thisContent = $this.parent().parent().parent().parent().parent().find('.item-content');
    var $content = $this.parent().parent().parent().parent().parent().parent().find('.item-content');
    if ($thisContent.hasClass('show')) {
        $thisContent.removeClass('show')
        $thisContent.slideUp(350);
        
    } else {
        $content.removeClass('show');
        $content.slideUp(350);
        $thisContent.toggleClass('show');
        $thisContent.slideToggle(350);
    }
});

