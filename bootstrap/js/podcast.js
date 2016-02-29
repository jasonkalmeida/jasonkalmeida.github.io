

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
}


$(function() {
  $( "#button" ).click(function() {
	  
	  var el = document.getElementById("button");
	     if (el.innerHTML == "SUBMIT") 
	     {
	         el.innerHTML = '<div class="spinner"></div>';
	     }
		 
      setTimeout(function() {
        
		  var el = document.getElementById("button");
		     if (el.innerHTML == '<div class="spinner"></div>') 
		     {
		         el.innerHTML = '&#xf00c;';
		     }
			 
			 $( "#button" ).addClass( "change", 450);
			 
			 $('#email').attr('placeholder','Thank you for subscribing!');
		    
		
         }, 3250 );


	//$( "#button" ).removeClass( "btn btn-default" );
	
   
	
    //$( "#button" ).addClass( "change", 450);
	//callback();
  });
 
/*
    function callback() {
		
	    
      setTimeout(function() {
        $( "#button" ).removeClass( "change" );
		$( "#button" ).addClass( "btn btn-default" );
		
  	  var el = document.getElementById("button");

  	       el.innerHTML = 'SUBMIT';
		
      }, 4250 );
    }*/
  });