$(document).ready(function() {
  var player = new Vimeo.Player('player');

  $('.point#one').click(function() {
    $('.overlay h1').html('Company Information');
    player.loadVideo(270620721).then(function(id) {
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
    $('.overlay h1').html('Text Message');
    player.loadVideo(270620731).then(function(id) {
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
    $('.overlay h1').html('Timed Transfer');
    player.loadVideo(270620760).then(function(id) {
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
    $('.overlay h1').html('Ghost Writing');
    player.loadVideo(270620818).then(function(id) {
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
    $('.overlay h1').html('Shared Data');
    player.loadVideo(270621098).then(function(id) {
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
    $('.overlay h1').html('VIP & Urgent & ColdCall');
    player.loadVideo(270621111).then(function(id) {
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
