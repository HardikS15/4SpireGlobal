(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      slideTransition: "linear",
      smartSpeed: 500,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    $(".owl-carousel2").owlCarousel({
      loop: true,
      center: false,
      margin: 0,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    });
  };

  // svg responsive in mobile mode
  var checkPosition = function () {
    if ($(window).width() < 767) {
      $("#bg-services").attr("viewBox", "0 0 1050 800");
    }
  };

  (function ($) {
    carousels();
    checkPosition();
  })(jQuery);
})();

// menu toggle button
function myFunction(x) {
  x.classList.toggle("change");
}
