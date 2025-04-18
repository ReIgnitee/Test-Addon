(function() {
	'use strict';

	console.log("Glow Addon is active!");
	const checklogin = setInterval(() => {
		if(typeof Player !== "undefined" && Player.Name){
			clearInterval(checklogin);
			
			const profile = document.getElementById("OnlineProfile") || document.getElementById("PlatformProfile");

			
			if(profile){
				const button = document.createElement("button");
				button.style.padding = '20px';
				button.style.marginTop = '10px';
				button.innerText = "Click Me!";
				button.onclick = () => alert("Hooray! It work!");
				
				profile.appendChild(button);
			}else{
				console.warn("Profile element not found!");
			}
		}
	},500);
})();