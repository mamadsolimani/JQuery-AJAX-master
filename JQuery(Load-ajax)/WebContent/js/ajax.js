
$(document).ready(function() {
	
	
	
	$('#button').click(function() {
	
		$('<p>This is a test in js file.</p>').appendTo('body');
		
		$.ajax({
			url: 'two.jsp',
			success: function(data) {
				$('#content').html(data);
			}
		});
		
	});
	
});

