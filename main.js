$(document).ready(function() {
  $('.point').click(function() {
    $('.embed-container').fadeIn(250);
    $('.overlay').fadeIn(250);
  });

  $('.close').click(function() {
    $('.embed-container').fadeOut(250);
    $('.overlay').fadeOut(250);
  });
});
