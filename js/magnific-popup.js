$(".photo-gallery").each(function(){
  $(this).magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    },
    callbacks: {
        elementParse: function(e) {
            "video" == e.el[0].className ? (e.type = "iframe",
            e.iframe = {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>',
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            e.srcAction = "iframe_src") : (e.type = "image",
            e.tLoading = "Loading image #%curr%...",
            e.mainClass = "mfp-img-mobile",
            e.image = {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(e) {
                    return e.el[0].title + "<small>by Marsel Van Oosten</small>"
                }
            })
        }
    }
  });
})
