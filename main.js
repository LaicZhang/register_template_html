const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));



var demoImg = document.getElementById("demo_img");
var demoInput = document.getElementById("demo_input");

//隐藏text block，显示password block
function hideShowPsw(){
	if (demoInput.type == "password") {
		demoInput.type = "text";
		demo_img.src = "invisible.png";
	}else {
		demoInput.type = "password";
		demo_img.src = "visible.png";
	}
}
