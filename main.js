$(document).ready(function() {
  var iframe = document.querySelector('#player');
  var player = new Vimeo.Player(iframe);

  $('.point#one').click(function() {
    player.unload();
    player.loadVideo(274516353).then(function(id) {
      player.play();
    });
  });

  $('.point#two').click(function() {
    player.unload();
    player.loadVideo(274516334).then(function(id) {
      player.play();
    });
  });

  $('.point#three').click(function() {
    player.unload();
    player.loadVideo(270620760).then(function(id) {
      player.play();
    });
  });

  $('.closeModal').click(function(e) {
    e.stopPropagation();
    $(this).hide();
  });

  $('.point').click(function() {
    $('.embed-container').fadeIn(250);
    $('.overlay').fadeIn(250);
  });

  $('.vidBtn').click(function() {
    $('.embed-container').fadeIn(250);
    $('.overlay').fadeIn(250);
  });

  $('.close, .overlay').click(function() {
    $('.embed-container').fadeOut(250);
    $('.overlay').fadeOut(250);
    player.unload();
  });

  player.setColor('#e65300').then(function(color) {
    // the color that was set
  }).catch(function(error) {
      // an error occurred setting the color
  });

  player.on('ended', function() {
    $('.embed-container').fadeOut(250);
    $('.overlay').fadeOut(250);
    player.unload();
  });
});
