var $setTemplateBtn = $('#set-template');
var $brushId = $('#brush-id');

var checkColorOrMovie = function () {
    event.preventDefault();
    var colorOrMovieRadio = $('input[name=selection]:checked').val();
    var optionValue = $('input[name=selection-value]').val();

    if (colorOrMovieRadio === 'color') {
      $brushId.css("background-color", optionValue);
    } else {
      ajaxCall(optionValue);
    }
};

var ajaxCall = function (movieName) {
  var options = {
    url: "http://omdbapi.com/",
    method: 'get',
    data: { apikey: '2f6435d9', t: movieName }
  }
  var appendMovie = function(movie){
    $brushId.css("background-image", 'url('+movie.Poster+')');
  }
  $.ajax( options ).done( appendMovie );
}

var clickedSquare = function() {

  $('.square').on('mouseover', function(event) {

    var $clickedSquare = $(event.target);
    var colorOrMovieRadio = $('input[name=selection]:checked').val();

    if (colorOrMovieRadio === 'color') {
      var $brushColor = $brushId.css("background-color");
      $clickedSquare.css("background-color", $brushColor);

    } else {
      var $brushColor = $brushId.css("background-image");
      $clickedSquare.css({"background-image": $brushColor, "background-position": "center center", "background-repeat": "no-repeat", "background-size": "cover"});

    }
    $clickedSquare.css({"height": "10px", "width": "10px", "margin": "0"});
  });
};

var initSquare = function() {
  var $newdiv = '';
  for (var i = 0; i < 1000; i++) {
    $newdiv = $('<div class="square">');
    $('body').append($newdiv);
  };
};

var enteredSelectionValue = function () {

  $('input[name=selection-value]').keypress(function (e) {

    if(e.which == 13) {
      checkColorOrMovie();
      //return false;
    }
  });
};

var clickTemplateBtn = function () {

  $setTemplateBtn.on('click', function() {
    checkColorOrMovie();
    // return false;
  });
};

$(document).ready(function () {
  initSquare();
  clickedSquare();
  checkColorOrMovie();
  enteredSelectionValue();
  clickTemplateBtn();
});
