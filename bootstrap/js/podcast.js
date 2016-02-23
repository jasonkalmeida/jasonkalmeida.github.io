function showScroll() {
    $('html, body').animate({
        scrollTop: $("#show").offset().top
    }, 400);
};

function aboutScroll() {

	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, 400);

};

function contactScroll() {

	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 400);
};

function subscribed()
{
	$(document).ready(function(){
	  $('#mc-embedded-subscribe-form').submit(function(){
	    $('#email').attr('placeholder','Thank you for subscribing!');
	  });
	});
}