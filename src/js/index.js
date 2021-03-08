
$(document).ready(function () {
  $('.slider-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 450,
    mobileFirst: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
    ]
  });

  // Function Big Img
  $('.gallery .img-wrapper').click(function () {
    $(this).children('img').clone().prependTo('.gallery .bigImg');
    $('.gallery .bigImg').children('img:last-child').detach();

    // Styles
    $('.gallery .img-wrapper').css('border-color', 'inherit');
    $(this).css('border-color', '#309BD9');
  })
})