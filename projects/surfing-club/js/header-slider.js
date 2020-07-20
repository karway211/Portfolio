$(document).ready(() => {
  
  const headerSlider = $("#headerSlider");
  
  headerSlider.on('initialized.owl.carousel', (event) => {
    $('.slide-controls-number__active').text(event.item.index - 2)
    $('.slide-controls-number__total').text(event.item.count)
  });
  
  headerSlider.owlCarousel({
    items: 1,
      loop: true,
      dots: false,
      smartSpeed: 2000
  });
  
  $('#headerSliderLeft').click(() => {
    headerSlider.trigger('prev.owl.carousel');
  });
  $('#headerSliderRight').click(() => {
    headerSlider.trigger('next.owl.carousel');
  });
  
  headerSlider.on('changed.owl.carousel', (event) => {
    // $('.slide-controls-number__active').text(event.item.index + 1)
    // $('.slide-controls-number__total').text(event.item.count)

    if (event.item.index <= 2) {
      $('.slide-controls-number__active').text(5)
     }
     else {
       if (event.item.index >= 8) {
       $('.slide-controls-number__active').text(1)
      }
      else {    
       $('.slide-controls-number__active').text(event.item.index -2)
      }
     }
     $('.slide-controls-number__total').text(event.item.count)
  });

})
