var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional.

$j(document).ready(function(){
   var validation = $j('#signup').validate({
   			rules : {
        		names:{required:true}                   
        }//end of the rules
        ,
        messages : {
		        names:{required:"You need to enter your name"}
        }//end of the messages  
   });//end of validate
});//end of ready() function
