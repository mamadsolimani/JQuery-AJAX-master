
$(document).ready(function() {
	
	$('#name').focus();
	
	$('#button').click(function() {
		
		var name = $('#name').val();
		var family = $('#family').val();
		
		$.ajax({			
			type: 'POST',
			timeout: 30000,
			url: 'show.jsp',
			data: 'name=' + name + '&family=' + family,
			beforeSend: function() {
				$('#content').html('<i class="icon-spin6 animate-spin"></i>');
			},
			statusCode: {
				404: function() {
					$('#content').html('<p>error: page not found</p>');
				},
				500: function() {
					$('#content').html('<p>error: not connect</p>');
				}
			},
			success: function(data) {
				$('#content').html(data);
			}
		}).error(function() {
			// alert('error: page not found');
		}).success(function() {
			// alert('SUCCESS');
		}).complete(function() {
			// alert('Complete');
		});
		
	});
});

