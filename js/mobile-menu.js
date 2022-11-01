$(document).ready(function () {
  $("#mobile-menu-button").click(function () {
    $("#mobile-nav").css("display", "block");
    $("#body").css("overflow", "hidden");
  });

  $("#mobile-nav-close").click(function () {
    $("#mobile-nav").css("display", "none");
    $("#body").css("overflow", "scroll");
  });
});
