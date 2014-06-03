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
    	);
})

.mouseup(function() {
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
});

$(document).keydown(function(event){
    if (event.which == 88) {
        //playSwagga();
        alert("You did it!");
        $('.ryu-ready').hide();
        $('.ryu-cool').show();     
}
})
.keyup(function(event){
    if (event.which == 88) {
        alert("You did it again!");
       $('ryu-cool').hide();
        $('.ryu-ready').show();
    }
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playSwagga(){
    $('#swagga-like-us')[0].volume = 0.5;
    $('#swagga-like-us')[0].load();
    $('#swagga-like-us')[0].play();
}
});
