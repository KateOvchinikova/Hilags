$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    responsiveRefreshRate: 50,
    responsive: {
      320: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });
});
