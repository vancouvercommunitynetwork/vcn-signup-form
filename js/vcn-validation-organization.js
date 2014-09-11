var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional.

$j(document).ready(function(){
$j.validator.addMethod('validPass',function ( value ,element){
                  return (this.optional(element)||/^(?=.*[0-9])(?=.*[A-z])([A-z0-9\(\)\ \'\#\.\,\-\/\\]){6,8}$/.test(value) );
},"Please enter a password whit at least one letter and one digit. You can use these characters in your password as well \(\)\'\#\.    \,\-\/ \\ and space");

$j.validator.addMethod('validZip',function(value,element){
		return (this.optional(element) || /^[ABCEGHJKLMNPRSTVXYabcedhjklmnprstvxy]{1}\d{1}[A-z]{1} *\d{1}[A-z]{1}\d{1}$/.test(value));
},"Please enter a valid postal code");

$j.validator.addMethod('validContact',function(value,element){
	return (this.optional(element)||/^[A-z0-9\s\(\)\'\#\.\,\-\/\\]+\s([A-z0-9\(\)\'\#\.\,\-\/\\]+)$/.test(value));},"Please enter a valid name");
 
   var validation = $j('#signup').validate({
   			rules : {
        	names:{required:true,maxlength:40,validContact:true},
			phone1:{required:true,phoneUS:true},
			login:{required:true,remote:"/cgi-bin/vcn-validationuser.cgi"},
			password:{required:true,rangelength:[6,8],validPass:true},
			birth_contact:{required:true,validContact:true},
			keyword:{required:true},
			address1:{required:true},
			address2:{required:true},
			city:{required:true},
			province:{required:true},
			postalcode:{required:true,validZip:true},
			country:{required:true},			
            phone2:{required:true,phoneUS:true},
			fax:{phoneUS:true} 
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
			phone2:{
				required:"you need to enter your phone number"
			},
			login:{
                                required:"You need to select your user name"
			},
			password:{
                               required:"You need to choose a password",
                               rangelength:"Your password may be between 6 to 8 characters"
			},
			birth_contact:{
				required:"You need to enter a contact name"
			},
			keyword:{
				required:"You need to enter a keyword"
			},
			address1:{
				required:"You need to enter your address"
			},
			address2:{
				required:"You need to enter your address"
			},
			city:{
				required:"You need to enter the name of your city"
			},
			province:{
				required:"You need to enter the name of your province"
			},
			postalcode:{
				required:"You need to enter your postal code"
			},
			country:{
				required:"You should enter the anme of your countery"
			}
        }//end of the messages  
   });//end of validate
	$j('#reset').click(function(){
                validation.resetForm();
	});//end of reset click

});//end of ready() function
