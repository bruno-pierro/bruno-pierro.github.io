$(document).ready(function(){



$('.event1Trigger').hover(function(){
	$('.event1Bubble').css("visibility", "visible");
},function(){
    $('.event1Bubble').css("visibility", "hidden")
});

$('.event2Trigger').hover(function(){
	$('.event2Bubble').css("visibility", "visible");
},function(){
    $('.event2Bubble').css("visibility", "hidden")
});

$('.event3Trigger').hover(function(){
	$('.event3Bubble').css("visibility", "visible");
},function(){
    $('.event3Bubble').css("visibility", "hidden")
});

$('.agora').hover(function(){
	$('.event4Bubble').css("visibility", "visible");
},function(){
    $('.event4Bubble').css("visibility", "hidden")
});

$('#time1').hover(function(){
	$('.event1Bubble').css("visibility", "visible");
},function(){
    $('.event1Bubble').css("visibility", "hidden")
});

$('.time2').hover(function(){
	$('.event2Bubble').css("visibility", "visible");
},function(){
    $('.event2Bubble').css("visibility", "hidden")
});

$('#time3').hover(function(){
	$('.event3Bubble').css("visibility", "visible");
},function(){
    $('.event3Bubble').css("visibility", "hidden")
});


$('.fa-facebook-square').hover(function(){
	$(this).css("font-size", "3em");
},function(){
    $(this).css("font-size", "2em")
});

$('.fa-twitter-square').hover(function(){
	$(this).css("font-size", "3em");
},function(){
    $(this).css("font-size", "2em")
});

$('.fa-linkedin').hover(function(){
	$(this).css("font-size", "3em");
},function(){
    $(this).css("font-size", "2em")
});

$('.fa-github-square').hover(function(){
	$(this).css("font-size", "3em");
},function(){
    $(this).css("font-size", "2em")
});




(function(url) {
  // Create a new `Image` instance
  var image = new Image();

  image.onload = function() {
    // Inside here we already have the dimensions of the loaded image
    var style = [
      // Hacky way of forcing image's viewport using `font-size` and `line-height`
      'font-size: 1px;',
      'line-height: ' + this.height + 'px;',

      // Hacky way of forcing a middle/center anchor point for the image
      'padding: ' + this.height * .5 + 'px ' + this.width * .5 + 'px;',

      // Set image dimensions
      'background-size: ' + this.width + 'px ' + this.height + 'px;',

      // Set image URL
      'background: url('+ url +');'
     ].join(' ');

     console.log('%c', style);
  };

  // Actually loads the image
  image.src = url;
})('https://i.cloudup.com/Zqeq2GhGjt-3000x3000.jpeg');

})


