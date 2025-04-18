(function () {
	'use strict';

	console.log("Glow Addon is active!");

	// Wait until Player is available (logged in)
	const checkLogin = setInterval(() => {
		if (typeof Player !== "undefined" && Player.Name) {
			clearInterval(checkLogin);
			waitForProfilePanel();
		}
	}, 500);

	function waitForProfilePanel() {
		const checkProfile = setInterval(() => {
			const profile = document.getElementById("OnlineProfile") || document.getElementById("PlatformProfile");

			if (profile) {
				clearInterval(checkProfile);
				injectGlowAddonUI(profile);
			}
		}, 500);
	}

	function injectGlowAddonUI(profile) {
		// Make sure we don’t inject it multiple times
		if (document.getElementById("glow-addon-menu-button")) return;

		const menuButton = document.createElement("button");
		menuButton.innerText = "☰";
		menuButton.id = "glow-addon-menu-button";
		menuButton.style.position = "absolute";
		menuButton.style.top = "10px";
		menuButton.style.right = "10px";
		menuButton.style.zIndex = 1000;
		menuButton.style.padding = "8px";
		menuButton.style.borderRadius = "5px";
		menuButton.style.background = "#444";
		menuButton.style.color = "#fff";
		menuButton.style.border = "none";
		menuButton.style.cursor = "pointer";
		menuButton.style.fontSize = "16px";

		const panel = document.createElement("div");
		panel.id = "glow-addon-panel";
		panel.style.position = "absolute";
		panel.style.top = "40px";
		panel.style.right = "10px";
		panel.style.width = "200px";
		panel.style.background = "#222";
		panel.style.border = "1px solid #666";
		panel.style.borderRadius = "10px";
		panel.style.padding = "10px";
		panel.style.display = "none";
		panel.style.zIndex = 999;

		const title = document.createElement("div");
		title.innerText = "Glow Settings";
		title.style.color = "#fff";
		title.style.marginBottom = "10px";
		title.style.fontWeight = "bold";
		panel.appendChild(title);

		const btn = document.createElement("button");
		btn.innerText = "Test Glow!";
		btn.style.marginTop = "5px";
		btn.onclick = () => alert("Glow activated!");
		panel.appendChild(btn);

		// Toggle the panel
		menuButton.onclick = () => {
			panel.style.display = (panel.style.display === "none") ? "block" : "none";
		};

		// Add to profile
		profile.appendChild(menuButton);
		profile.appendChild(panel);
	}
})();
