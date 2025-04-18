(function() {
	'use strict';

	console.log("Glow Addon is active!");
	const checklogin = setInterval(() => {
		if(typeof Player !== "undefined" && Player.Name){
			clearInterval(checklogin);
			
			const originalOnlineProfileRun = OnlineProfileRun;

			let buttonAdded = false;

			OnlineProfileRun = function () {
				// Call the original function first
				originalOnlineProfileRun();

				if (!buttonAdded) {
					const profile = document.getElementById("OnlineProfile") || document.getElementById("PlatformProfile");

					if (profile) {
						const Button = document.createElement("button");
						Button.style.padding = '10px';
						Button.style.margin = '10px';
						Button.innerText = "Addon Settings";
						Button.onclick = () => alert("This is the Addon Settings button!");

						profile.appendChild(Button);
						buttonAdded = true;
					}
				}
			};

		}
	},500);
})();