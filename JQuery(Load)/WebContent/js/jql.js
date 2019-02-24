
$(document).ready(function() {
	
	$('#load').click(function() {
		var load = $('<div id="content"></div>').load('show.jsp #paragraph');
		load.appendTo('body');
	});
	
});