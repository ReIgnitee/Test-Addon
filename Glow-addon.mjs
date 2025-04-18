(function() {
	'use strict';

	console.log("Glow Addon is active!");
	const checklogin = setInterval(() => {
		if(typeof Player !== "undefined" && Player.Name){
			clearInterval(checklogin);
			
			const profile = document.getElementById("OnlineProfile") || document.getElementById("PlatformProfile");

			
			if(profile){
				const Button = document.createElement("button");
				Button.style.padding = '20px';
				Button.top = '20px';
				Button.left = '20px';
				Button.innerText = "Click Me!";
				Button.onclick = () => alert("Hooray! It work!");
				
				profile.appendChild(Button);
			}else{
				console.warn("Profile element not found!");
			}
		}
	},500);
})();