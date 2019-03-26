// calc.js
/*
$(document).ready(function() {
		$( "button" ).click(function() {
			$( "button" ).hide( "slow", function() {
				alert( "Animation complete." );
			});
		});
	}
);
*/
$(document).ready(function(){
	/*$("[type = 'button']").mouseenter(function(){
		$( this ).animate({
	    	opacity: 0.5,
	    	left: "+=50",
	    	height: "toggle"
	  	})
	});
	$("[type = 'button']").mousedown(function(){
	  	//
	});*/
	$("[type = 'button']").click(function(){
	    $(this).hide("slow");
	});
});
