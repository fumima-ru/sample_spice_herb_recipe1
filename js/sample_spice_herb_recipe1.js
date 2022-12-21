$(function() {
   
  $('.slick-area').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '70px',
          slidesToShow: 3
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        },
      },
    ],
  });

});