$(document).ready(function() {
$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})
.mouseleave(function() {
	$('.ryu-ready').hide();
	$('.ryu-still').show();
})
.mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
    	{'left': '300px'},
    	500,
    	function() {
    		$(this).hide();
    		$(this).css('left', '-180px');
    	}
    	)

}
$('.ryu-cool').keydown(function() {
    if (event.which == 88) {
        event.preventDefault();
    })

$('ryu-cool').keyup(function() {
    $('.ryu-cool').show();
    $('.ryu-ready').hide();

}


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> Jenn's StreetFighter</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="js/app.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Frijole' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="main">
    <div id="container">
        <div id="containter-text">
            <p class="instructions">Click on Ryu to hear a "Hadouken" and see him throw a flame!</p>
            <p class="instructions-2">Press down on "X" to watch Ryu strike a pose.</p>
        </div>
    </div>

    <div class="ryu">
        <div class="ryu-still" style="display: block;"alt="A still version of Ryu."></div>
            <div class="ryu-ready" style="display: none;"alt="Ryu jumping in ready position."></div>
                <div class="ryu-throwing" style="display: none;"alt="Ryu throwing hadouken."></div>
                    <div class="ryu-cool" style="display: none;"alt="Ryu in cool pose."></div>
                    
    </div>
    <div class="hadouken"></div>
</div>
    <div id="container">
    </div>
    <audio id="hadouken-sound" src="sound/hadouken.mp3" alt="Hadouken Street Fighter Sound">
        <audio id="swagger-like-us-sound" src="sound/swaggerlikeus.mp3" alt="Swagger Like Us Song">
</body>
</html>
.mouseup(function() {
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}





$(function() {
    $('ryu-cool').keydown(function(e) {
        var key = e.which;
    if (event.which == 8) {
        $('.ryu-cool').show();
        event.preventDefault();
    }
    )};
    }

  .keyup(function() {
        var key = 88;
    if (event.which == key) {
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
}
};


var e = JQuery.Event('keydown');
e.which = 88;
e.keyCode = 88;
$('ryu-cool').trigger(e);

$('.ryu-cool').keydown(function(e) {
    if (e.keyCode == 88) {
        alert('Enter key pressed!');
    }
});


if ($(this).event.keyCode == 88) {
        alert('Press this key');
    } 
    

    .keydown(function() {
    if (event.which == 88) {
        alert('Press this key');
    }
    }  
);
});


  $('.ryu-cool').on('keydown', function(event){
    if (event.which == 88){
        alert('Correct!')
    }

  })



  
$('.ryu-cool').keydown(function(event){
    if (event.which == 88) {
        alert("Correct!");
} else {
    alert("Wrong!");
}
});



var cool_pose = 88;
$(document).keydown(function(event){
    if (event.which == cool_pose) {
        //playSwagga();
        //console.log("You did it!");
        $('.ryu-cool').show();  
        $('.ryu-ready','.ryu-still','.ryu-throwing').hide();
          
}


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
    $('.ryu-throwing').hide();
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