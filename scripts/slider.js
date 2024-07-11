$(document).ready(function () {
  $(".splide-mob").slick({
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    variableWidth: true,
  });

  $(".slider-mob").slick({
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    edgeFriction: 0.05,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    variableWidth: true,
  });
});
