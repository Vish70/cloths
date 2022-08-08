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



//////////////////  Nav Bar 



			product.addEventListener('click',function(){
			  // e.preventDefault();
			  if(iconrotate.style.transform=="rotate(0deg)"){
			  document.getElementById('iconrotate').style.transform="rotate(178deg)";

			}
			 else{
			   document.getElementById('iconrotate').style.transform="rotate(0deg)";
			
			}
			 })
			
			 var burger=document.getElementById('menu-btn');
			// var navbar=document.getElementById('navbar');
			document.getElementById('menu-btn').onclick=()=>{
			// navbar.classList.toggle('active');
			burger.classList.toggle('active');
			}


/////////////////  Login btn //////////////


function log(){
	// e.preventDefault();
	if(iconrotate2.style.transform=="rotate(0deg)",show_login.style.visibility=="visble",show_login.style.opacity=="1"){
	document.getElementById('iconrotate2').style.transform="rotate(178deg)";
   document.getElementById('show_login').style.visibility="hidden";
   document.getElementById('show_login').style.opacity="0";
  }
   else{
	 document.getElementById('iconrotate2').style.transform="rotate(0deg)";
     document.getElementById('show_login').style.visibility="visible";
   document.getElementById('show_login').style.opacity="1";
  
  }
   };
  

///////////////////////   Cart Page

	


			 var a=document.getElementById('smallimg');
        smallimg.addEventListener('click',()=>{
        let y=document.getElementById("main_img").innerHTML="<img src='image/gallery-1.jpg'>";
    });

     var b=document.getElementById('smallimg2');
        smallimg2.addEventListener('click',()=>{
        let c=document.getElementById("main_img").innerHTML="<img src='image/gallery-2.jpg'>";
     
	 });
          var b=document.getElementById('smallimg3');
        smallimg3.addEventListener('click',()=>{
        let c=document.getElementById("main_img").innerHTML="<img src='image/gallery-3.jpg'>";
     
	 });
          var b=document.getElementById('smallimg4');
        smallimg4.addEventListener('click',()=>{
        let c=document.getElementById("main_img").innerHTML="<img src='image/gallery-4.jpg'>";
     
	 });



// /////////////////////////  








