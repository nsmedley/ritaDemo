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

  $('#one').click(function() {
    // $('.point').removeClass('open');
    // $('.point').css('width', '20px');
    // $('.point').css('height', '20px');
    // $('.point p').fadeTo(0, 0);
    $(this).addClass('open');

    setTimeout(function(){
      $('.point.open').css('width', '250px');
    }, 250);
    setTimeout(function(){
      $('.point.open').css('height', 'auto');
    }, 500);
    setTimeout(function(){
      $('.point.open p').fadeTo(250, 1);
    }, 500);

  });

  $('#two').click(function() {
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
