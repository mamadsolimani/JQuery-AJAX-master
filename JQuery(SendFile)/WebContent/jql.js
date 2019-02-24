
$('document').ready(function() {
	

	$('#btnupload').click(function() {
		
		$('.progressPPPPPPPPPPPPPPPPPPP').show();
				
				var formData = new FormData($('form')[0]);
				$.ajax({
					url : $('#formup').attr('action'),
					type : 'POST',
					data : formData,
					cache : false,
					contentType : false,
					processData : false,
					xhr : function() { // Custom XMLHttpRequest
						var myXhr = $.ajaxSettings.xhr();
						if (myXhr.upload) { // Check if upload property exists
							myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
						}
						return myXhr;
					},
					statusCode: {
						404: function() {
							$('#response').html('<p>error: page not found</p>');
						},
						500: function() {
							$('#response').html('<p>error: Error in Server</p>');
						},
					},
					//Ajax events
					beforeSend : function() {
						$('#response').html('loading ...')
					},
					success : function(data) {
						$('#response').html(data);
					},
					error : function(jqXHR, textStatus, errorThrown) {
						$('#response').html(textStatus + "<br/>" + errorThrown);
					},
					complete: function() {
						
					}
				});
				
				
				//$('progress').hide();
			});
	
	function progressHandlingFunction(e) {
	    if(e.lengthComputable) {
	        
	    	// first progressBar
	    	$('progress').attr({value:e.loaded,max:e.total}); 
	    	$('#msg').html( parseInt( $('progress').attr('value') / $('progress').attr('max') * 100) + "%" );
	    	
	    	// second progressBar
	    	$('.progress-bar').attr({'value': e.loaded});
	    	$('.progress-bar').attr({'max': e.total});
	    	
	    	$('.progress-bar').css({ 'width': parseInt( $('.progress-bar').attr('value') / $('.progress-bar').attr('max') * 100) + "%" });
	    	$('.progress-bar').html(parseInt( $('.progress-bar').attr('value') / $('.progress-bar').attr('max') * 100) + "%");
	    	
	    }
	}
	
});