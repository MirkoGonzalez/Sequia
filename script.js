window.addEventListener('DOMContentLoaded', function() {
  var parentElement = document.querySelector('.about-us');
  var card3 = document.querySelector('.about-us .card:nth-child(3)');
  var card4 = document.querySelector('.about-us .card:nth-child(4)');
  
  if (window.innerWidth < 740) {
      parentElement.insertBefore(card3, card4);
  }
  
  window.addEventListener('resize', function() {
      if (window.innerWidth > 740) {
          parentElement.insertBefore(card3, card4);
      } else {
          parentElement.insertBefore(card4, card3);
      }
  });
});
