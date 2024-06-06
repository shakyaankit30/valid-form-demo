window.onload = function () {
      const form = document.getElementById('myForm');
		
		const inputname 			= document.getElementById('inputname');
		const alert_name 			= document.getElementById('alert_name');
		
		const inputnumber 			= document.getElementById('inputnumber');
		const alert_number 			= document.getElementById('alert_number');
		
		const inputmail 			= document.getElementById('inputmail');
		const alert_mail 			= document.getElementById('alert_mail');
		
		const inputpassword			= document.getElementById('inputpassword');
		const alert_password		= document.getElementById('alert_password');
		
		const inputconfirmpassword  = document.getElementById('inputconfirmpassword');
		const alert_confirmpassword  = document.getElementById('alert_confirmpassword');

		 
      form.addEventListener('submit', function (event) {
		  event.preventDefault();

		if (validateFormData()) {
          
		  const inputFields = document.querySelectorAll("input");
		  const alert_small = document.querySelectorAll("small");
			inputFields.forEach(input => {
				if (input.classList.contains('validationfail')) {
					input.classList.remove('validationfail');
				}
			});
			alert_small.forEach(small => {
					small.innerHTML = '';
			});
			displayFormData();
			//displayConsole();
        }
      });
	  
	function displayFormData() {
		
		
        const inputName2 = document.getElementById('inputname').value;
        const inputNumber2 = document.getElementById('inputnumber').value;
        const inputMail2 = document.getElementById('inputmail').value;
        const inputPassword2 = document.getElementById('inputpassword').value;

        const formDataDisplay = document.getElementById('formDataDisplay');
        formDataDisplay.innerHTML = `
          <p>Name: ${inputName2}</p>
          <p>Mobile Number: ${inputNumber2}</p>
          <p>Mail Id: ${inputMail2}</p>
          <p>Password: ${inputPassword2}</p>
        `;
      }
	  
		function displayConsole() {

			
			const inputName3 = document.getElementById('inputname').value;
			const inputNumber3 = document.getElementById('inputnumber').value;
			const inputMail3 = document.getElementById('inputmail').value;
			const inputPassword3 = document.getElementById('inputpassword').value;
			console.log('Name :'+ inputName3 + '  Mobile No: ' + inputNumber3 + '  Mail Id: ' + inputMail3 + '  Password : '+ inputPassword3);
			window.onload = function () {
      const form = document.getElementById('myForm');
		
		const inputname 			= document.getElementById('inputname');
		const alert_name 			= document.getElementById('alert_name');
		
		const inputnumber 			= document.getElementById('inputnumber');
		const alert_number 			= document.getElementById('alert_number');
		
		const inputmail 			= document.getElementById('inputmail');
		const alert_mail 			= document.getElementById('alert_mail');
		
		const inputpassword			= document.getElementById('inputpassword');
		const alert_password		= document.getElementById('alert_password');
		
		const inputconfirmpassword  = document.getElementById('inputconfirmpassword');
		const alert_confirmpassword  = document.getElementById('alert_confirmpassword');

		 
      form.addEventListener('submit', function (event) {
		  event.preventDefault();

		if (validateFormData()) {
          
		  const inputFields = document.querySelectorAll("input");
		  const alert_small = document.querySelectorAll("small");
			inputFields.forEach(input => {
				if (input.classList.contains('validationfail')) {
					input.classList.remove('validationfail');
				}
			});
			alert_small.forEach(small => {
					small.innerHTML = '';
			});
			displayFormData();
			displayConsole();
        }
      });
	  
	function displayFormData() {
		
		
        const inputName2 = document.getElementById('inputname').value;
        const inputNumber2 = document.getElementById('inputnumber').value;
        const inputMail2 = document.getElementById('inputmail').value;
        const inputPassword2 = document.getElementById('inputpassword').value;

        const formDataDisplay = document.getElementById('formDataDisplay');
        formDataDisplay.innerHTML = `
          <p>Name: ${inputName2}</p>
          <p>Mobile Number: ${inputNumber2}</p>
          <p>Mail Id: ${inputMail2}</p>
          <p>Password: ${inputPassword2}</p>
        `;
      }
	  
		function displayConsole() {

			
			const inputName3 = document.getElementById('inputname').value;
			const inputNumber3 = document.getElementById('inputnumber').value;
			const inputMail3 = document.getElementById('inputmail').value;
			const inputPassword3 = document.getElementById('inputpassword').value;
			console.log('Name :'+ inputName3 + '  Mobile No: ' + inputNumber3 + '  Mail Id: ' + inputMail3 + '  Password : '+ inputPassword3);
			form.reset(); 
		}

      function validateFormData() {
		 var r1 = true, r2 = true, r3 = true, r4 = true, r5 = true;
		
		

        if (inputname.value.trim() === '') {
			alert_name.innerHTML = "Please Enter Name Field is Required." ;
			inputname.focus();
			inputname.classList.add("validationfail");
			r1 = false;
        }
		if (inputnumber.value.trim() === '') {
			alert_number.innerHTML = "Please Enter Mobile Number Field is Required.";
			inputnumber.focus();
			inputnumber.classList.add("validationfail");
			r2 =  false;
        }
		if (inputnumber.value.length !== 10 ) {
			alert_number.innerHTML = "Please Enter Vaild Mobile Number.";
			inputnumber.focus();
			inputnumber.classList.add("validationfail");
			r2 =  false;
		}
		
		if (inputmail.value.trim() === '') {
			alert_mail.innerHTML = "Please Enter Mail ID Field is Required.";
			inputmail.focus();
			inputmail.classList.add("validationfail");
			r3 =  false;
        }
				
		if (inputpassword.value.trim() === '') {
			alert_password.innerHTML = "Please Enter Password Field is Required.";
			inputnumber.focus();
			inputpassword.classList.add("validationfail");
			r4 =  false;
        }
		if (inputconfirmpassword.value.trim() === '') {
			alert_confirmpassword.innerHTML = "Please Enter Confirm Password Field is Required.";
			inputconfirmpassword.focus();
			inputconfirmpassword.classList.add("validationfail");
			r5 =  false;
        }
		
		if (!validatePassword(inputpassword.value)) {
			alert_password.innerHTML = "Password length should be 8 to 15 Character";
			inputnumber.focus();
			inputpassword.classList.add("validationfail");
			r4 =  false;
		}
		
		if(inputpassword.value.trim() !== inputconfirmpassword.value.trim()){
			alert_confirmpassword.innerHTML = "Confirm Password Not Match with Password Filed";
			inputconfirmpassword.focus();
			inputconfirmpassword.classList.add("validationfail");
			r5 =  false;
		}
		
		
		if(r1 === false || r2 === false || r3 === false || r4 === false || r5 === false){
			return false;
		}
        // Form is valid
		
		return true; 
      }

    }
	
	function validatePassword(value) {
	  if (value.length >= 8 && value.length <= 15) {
		return true; // Password length is valid
	  } else {
		return false; // Password length is invalid
	  }
	}

	function reset_frm(){  
		   //form.reset();  
		   window.location.reload();
		 } 
		}

      function validateFormData() {
		 var r1 = true, r2 = true, r3 = true, r4 = true, r5 = true;
		
		

        if (inputname.value.trim() === '') {
			alert_name.innerHTML = "Please Enter Name Field is Required." ;
			inputname.focus();
			inputname.classList.add("validationfail");
			r1 = false;
        }
		if (inputnumber.value.trim() === '') {
			alert_number.innerHTML = "Please Enter Mobile Number Field is Required.";
			inputnumber.focus();
			inputnumber.classList.add("validationfail");
			r2 =  false;
        }
		if (inputnumber.value.length !== 10 ) {
			alert_number.innerHTML = "Please Enter Vaild Mobile Number.";
			inputnumber.focus();
			inputnumber.classList.add("validationfail");
			r2 =  false;
		}
		
		if (inputmail.value.trim() === '') {
			alert_mail.innerHTML = "Please Enter Mail ID Field is Required.";
			inputmail.focus();
			inputmail.classList.add("validationfail");
			r3 =  false;
        }
		if(!validateEmail(inputmail.value)){
			alert_mail.innerHTML = "Please Enter Valid Mail ID.";
			inputmail.focus();
			inputmail.classList.add("validationfail");
			r3 =  false;
		}
				
		if (inputpassword.value.trim() === '') {
			alert_password.innerHTML = "Please Enter Password Field is Required.";
			inputnumber.focus();
			inputpassword.classList.add("validationfail");
			r4 =  false;
        }
		if (inputconfirmpassword.value.trim() === '') {
			alert_confirmpassword.innerHTML = "Please Enter Confirm Password Field is Required.";
			inputconfirmpassword.focus();
			inputconfirmpassword.classList.add("validationfail");
			r5 =  false;
        }
		
		if (!validatePassword(inputpassword.value)) {
			alert_password.innerHTML = "Password length should be 8 to 15 Character";
			inputnumber.focus();
			inputpassword.classList.add("validationfail");
			r4 =  false;
		}
		
		if(inputpassword.value.trim() !== inputconfirmpassword.value.trim()){
			alert_confirmpassword.innerHTML = "Confirm Password Not Match with Password Filed";
			inputconfirmpassword.focus();
			inputconfirmpassword.classList.add("validationfail");
			r5 =  false;
		}
		
		
		if(r1 === false || r2 === false || r3 === false || r4 === false || r5 === false){
			return false;
		}
        // Form is valid
		
		return true; 
      }

    }
	
	function validatePassword(value) {
	  if (value.length >= 8 && value.length <= 15) {
		return true; // Password length is valid
	  } else {
		return false; // Password length is invalid
	  }
	}

	function reset_frm(){  
		   //form.reset();  
		   window.location.reload();
		 } 
		 
	
	function validateEmail(email) {
         let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
         let result = regex.test(email);
         if (result) {
			 return true;
            //output.innerHTML = "The " + email + " is a valid email address!";
         } else {
			 return false;
            //output.innerHTML = "The " + email + " is not a valid email address!";
         }
      }