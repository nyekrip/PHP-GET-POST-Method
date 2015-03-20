$(document).ready(function(){

$("input[type=radio]").change(function(){
 var method = $(this).val();
 $("#form").attr("method", method); 
});

$("#submit").click(function(){ 
	var fnama = $("#fnama").val();
	var lalamat = $("#lalamat").val();
	
	if( fnama != '' || lalamat !='' ){
		return true; 
	}	
	else{
		alert("Tolong diisi...!!!!!!");
		return false;
	}
});
});