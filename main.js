$(document).ready(function() {
  var player = new Vimeo.Player('player');

  $('.point#one').click(function() {
    $('.overlay h1').html('Video title 1');
    player.loadVideo(237401551).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point#two').click(function() {
    $('.overlay h1').html('Video title 2');
    player.loadVideo(246099157).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point#three').click(function() {
    $('.overlay h1').html('Video title 3');
    player.loadVideo(250101793).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point#four').click(function() {
    $('.overlay h1').html('Video title 4');
    player.loadVideo(250101673).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point#five').click(function() {
    $('.overlay h1').html('Video title 5');
    player.loadVideo(244664985).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point#six').click(function() {
    $('.overlay h1').html('Video title 6');
    player.loadVideo(244664877).then(function(id) {
      player.play();
    }).catch(function(error) {
        switch (error.name) {
            case 'TypeError':
                break;
            case 'PasswordError':
                break;
            case 'PrivacyError':
                break;
            default:
                break;
        }
    });
  });

  $('.point').click(function() {
    $('.embed-container').fadeIn(250);
    $('.overlay').fadeIn(250);
  });

  $('.close, .overlay').click(function() {
    $('.embed-container').fadeOut(250);
    $('.overlay').fadeOut(250);
  });

  player.setColor('#e65300').then(function(color) {
    // the color that was set
  }).catch(function(error) {
      // an error occurred setting the color
  });

  player.on('ended', function() {
    $('.embed-container').fadeOut(250);
    $('.overlay').fadeOut(250);
  });
});
