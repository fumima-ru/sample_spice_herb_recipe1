$(function() {
  /* $('.slick-area').slick( {
    autoplay: true,
    dots: true,
    arrows: false,
    // centerMode: false,
    // Padding: '20px',
    slidesToShow: 5,
 */
    
      
    $('.slick-area').slick({
      autoplay: true,
      dots: true,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            centerPadding: '70px',
            slidesToShow: 3
          },
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });

});