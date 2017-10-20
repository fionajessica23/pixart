var $setColorBtn = $('#set-color');
var $colorField = $('#color-field');
var $brushId = $('#brush-id')


$setColorBtn.on('click', function() {
  event.preventDefault();

  var newColorValue = $colorField.val();
  console.log(newColorValue);
  $brushId.css("background", newColorValue)

});


$(document).ready(function () {
  var $newdiv;
  for (var i = 0; i < 1000; i++) {
    $newdiv = $('<div class="square">');
    $('body').append($newdiv);
  }
});
