var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional.

$j(document).ready(function(){

$j.validator.addMethod('validDate',function ( value ,element){
                return (this.optional(element)|| /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)$/.test(value) );
        },"Please enter your birthday in format MM\/DD\/YYYY");

$j.validator.addMethod('validZip',function(value,element){
		return (this.optional(element) || /^[ABCEGHJKLMNPRSTVXYabcedhjklmnprstvxy]{1}\d{1}[A-z]{1} *\d{1}[A-z]{1}\d{1}$/.test(value));
},"Please enter a valid postal code");

$j.validator.addMethod('validFullname',function(value,element){
		return (this.optional(element)||/^[A-z0-9\s\(\)\'\#\.\,\-\/\\]+\s([A-z0-9\(\)\'\#\.\,\-\/\\]+)$/.test(value));
},"Please enter your first and last name");

   var validation = $j('#signup').validate({
   			rules : {
        		names:{required:true,validFullname:true ,maxlength:40},
			phone1:{required:true,phoneUS:true},
			login:{required:true,remote:"/cgi-bin/vcn-validationuser.cgi"},
			password:{required:true,rangelength:[6,8]},
			birth_contact:{required:true, validDate:true},
			keyword:{required:true},
			address1:{required:true},
			city:{required:true},
			province:{required:true},
			postalcode:{required:true,validZip:true},
			country:{required:true},			
                   
        }//end of the rules
        ,
        messages : {
		        names:{
				required:"You need to enter your name",
				maxlength:"your name can not be more than 40 characters"
			},
			phone1:{
				required:"you need to enter your phone number"
			},
			login:{
                                required:"You need to select your user name"
			},
			password:{
                               required:"You need to choose a password",
                               rangelength:"Your password may be between 6 to 8 characters"
			},
			birth_control:{
				required:"You need to enter your birth date"
			},
			keyword:{
				required:"You need to enter a keyword"
			},
        }//end of the messages  
   });//end of validate
	$j('#reset').click(function(){
                validation.resetForm();
	});//end of reset click

});//end of ready() function
