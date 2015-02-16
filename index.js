(function(){

  'use strict';

  function slideToLeft(element, margin) {
    Velocity(
        element,
        {
          translateX: [
            -element.scrollWidth - margin,
            element.offsetWidth + margin
          ]
        },
        {
          duration: 10000,
          easing: 'linear',
          complete: slideToLeft.bind(this, element, margin)
        });
  }

  slideToLeft(document.querySelector('.text'), 10);

}());
