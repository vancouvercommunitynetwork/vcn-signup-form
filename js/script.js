$(document).ready(function(){

	jQuery.validator.addMethod('validDate',function ( value ,element){
		return (this.optional(element)|| /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)$/.test(value) );
	},"Please enter your birthday in format MM\/DD\/YYYY");

	var validation = $('#signup').validate({
		rules : {
			names:{required:true,maxlength:35},
			phone1:{required:true,phoneUS:true},
			login:{required:true,remote:"checkUser.php"},
			password:{required:true,rangelength:[6,8]},
			confirm_password:{equalTo:'#password'},
			birth_contact:{validDate:true},
			keyword:{reuired:true},
			address1:{required:true},
			city:{required:true},
			province:{required:true},
			postalcode:{required:true},
			country:{required:true}
		},//end of rules
		messages: {
			names:{
				required:"You need to enter your full name.",
				maxlength:"You can enter no more than 35 characters."
			},
			phone1:{
				required:"You need to enter your phone number."
			},
			login:{
				required:"You need to enter your user name."
			},
			password:{
				required:"You need to enter a password.",
				rangelength:"Your password may be between 6 to 8 characters."
			},
			confirm_password:{
				equalTo:"Your passwords don't match."
			}

		}//end of error messages
	});//end of validate()

	$('#reset').click(function(){
		validation.resetForm();
	});//end of reset click
});//end of ready()