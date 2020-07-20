$(document).ready(() => {
  
  const shopSlider = $("#shopSlider");

  shopSlider.owlCarousel({
      loop: true,
      dots: false,
      smartSpeed: 500,
      responsive: {
        0: {
          items: 1,
        },
        1254: {
          items: 3,
        },
      }
    });

  $('#shopSliderLeft').click(() => {
    shopSlider.trigger('prev.owl.carousel');
  });
  $('#shopSliderRight').click(() => {
    shopSlider.trigger('next.owl.carousel');
  });

})
