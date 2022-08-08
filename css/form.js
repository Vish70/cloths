function valid(){
	var f=document.querySelector('#name')
	var username=document.querySelector('#name').value;
	var Email=document.querySelector("#email").value;
	var Pass=document.querySelector("#password").value;
	var cPass=document.querySelector("#cpassword").value;

	var usercheck=/^[A-Z][a-z]{4,30}$/;
	var emailcheck=/^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var passcheck=/^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;
	

	if(usercheck.test(username)){
		f.style.outlineColor="green";
	}
	else{
		
		f.style.outlineColor="red";

		return false;
	}


	if(emailcheck.test(Email)){
		email.style.outlineColor="green";

	}
	else{
		email.style.outlineColor="red";

		return false;	
	}
	if(passcheck.test(Pass)){
		password.style.outlineColor="green";

	}
	else{
		password.style.outlineColor="red";

		return false;
	}
	if(cPass.match(Pass)){
		cpassword.style.outlineColor="green";

	}else{
		cpassword.style.outlineColor="red";

		return false;
	}

}




//////  login



function validation(){


	var u=document.querySelector('#log-name')
	var e=document.querySelector('#log-email')
	var p=document.querySelector('#log-password')
	
	var logusername=document.querySelector('#log-name').value;
	var logEmail=document.querySelector("#log-email").value;
	var logPass=document.querySelector("#log-password").value;


	var userchek=/^[A-Z][a-z]{4,30}$/;
	var emailchek=/^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var passchek=/^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;
	

	if(userchek.test(logusername)){
		u.style.outlineColor="green";
	}
	else{
		u.style.outlineColor="red";

		return false;
	}


	if(emailchek.test(logEmail)){
		e.style.outlineColor="green";
	}
	else{
		e.style.outlineColor="red";

		return false;	
	}

	if(passchek.test(logPass)){
		p.style.outlineColor="green";

	}else{

		p.style.outlineColor="red";

		return false;
	}


}


//////////   rotate



			const card = document.getElementById("card")

			function openlogin(){
				card.style.transform = "rotateY(0deg)";
			}
	function openregister(){
				card.style.transform = "rotateY(-180deg)";
			}