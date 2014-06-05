$(document).ready(function() {
$('.ryu').mouseenter(function() {
  $('.ryu-still').hide();
  $('.ryu-cool').hide();
  $('.ryu-ready').show();
})

.mouseleave(function() {
  $('.ryu-ready').hide();
  $('.ryu-cool').hide();
  $('.ryu-still').show();
})

.mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-180px');
      }
      );
})

.mouseup(function() {
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
});



$(document).keydown(function(event){
  var cool_key = 88; // The keycode for x is 88
    if (event.which == cool_key) {
      //playSwagger();
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').show(); 
}


$(document).keyup(function(event){
  var cool_key = 88; // The keycode for x is 88
    if (event.which == cool_key) {
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
});



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playSwagger () {
   $('#swagger-like-us-sound')[0].volume = 0.2;
   $('#swagger-like-us-sound')[0].load();
   $('#swagger-like-us-sound')[0].play();

}  
});
});
