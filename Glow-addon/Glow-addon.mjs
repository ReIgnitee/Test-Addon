(function() {
    'use strict';
	
	const waitforlogin = setInterval(() => {
		if(typeof Player !== "undefined" && Player.Name){
			clearInterval(waitforlogin);
			
			//Create a Button Element
			const Button = document.createElement("Button");
			Button.innerHTML = "Click Me";
			Button.style.padding = "10px";
			Button.style.top = "20px";
			Button.style.left = "20px";
			Button.style.position = "fixed";
			
			//Appending the Element
			document.body.appendChild(Button);
			
			//Event Listener for the Button
			Button.addEventListener("click",function(){
				alert("This is your message dear~");
			});
		}
	}, 500);
})();
