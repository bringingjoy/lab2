'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

/*
 * Function defines what occurs on a click event
 */
function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();

	// $(this) --> refers to the object which trigger the event (caller)
	$(this).css("background-color", "#7fff00");
}
