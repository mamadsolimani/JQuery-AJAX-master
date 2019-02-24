<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Index</title>

<!-- jQuery UI -->
<link href="${pageContext.request.contextPath}/jquery-ui/jquery-ui.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/jquery-ui/jquery-1.10.2.js" type="text/javascript" ></script>
<script src="${pageContext.request.contextPath}/jquery-ui/jquery-ui.js" type="text/javascript" ></script>
<!-- / jQuery UI -->

<!-- Bootstrap -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="${pageContext.request.contextPath}/bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
<!-- / Bootstrap -->

<script src="${pageContext.request.contextPath}/jql.js" type="text/javascript" ></script>

</head>
<body>




<form id="formup" action="${pageContext.request.contextPath}/admin/up.html" method="post" enctype="multipart/form-data">

		<label>عکس پرسنلی :</label>
		<input type="file" name="my_file" id="uploadfile" /> <br/>
		
		<input type="button" class="btn btn-success" id="btnupload" value="آپلود فایل" /> <br/> 
		
	</form>
	
<br/><br/><br/><br/><br/>

<div class="progressPPPPPPPPPPPPPPPPPPP" style="display:none;">
	<progress></progress><span id="msg"></span>
</div>

<div class="progressPPPPPPPPPPPPPPPPPPP" style="display:none;">
	<div class="progress">
	  <div class="progress-bar progress-bar-striped" role="progressbar">
	    0%
	  </div>
	</div>
</div>


<div id="response" style="background-color: #0f0; width: 300px; height: 300px;"></div>


</body>
</html>