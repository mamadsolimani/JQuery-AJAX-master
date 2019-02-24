
$(document).ready(function() {
	
	$('#name').focus();
	
	$('form').submit(function() {
		 	
		var send = $(this).serialize(); 
		
		$.ajax({			
			type: 'POST',
			url: 'show.jsp',
			data: send,
			dataType: 'json',
			success: function(msg) {
				$('#content').html(msg.name + "<br/>" + msg.family);
			}
		});
		
		return false;
	});
});

