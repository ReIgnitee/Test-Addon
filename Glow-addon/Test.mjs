console.log("[Glow Addon] glow-core.mjs loaded");

const waitForLogin = setInterval(() => {
	if (typeof Player !== "undefined" && document.getElementById("SideMenu")) {
		clearInterval(waitForLogin);
		console.log("[Glow Addon] Player is loaded, hooking into Extensions menu");

		// Keep reference to the original builder
		const oldBuild = window.DialogExtensionMenuBuild;

		// Override the build function
		window.DialogExtensionMenuBuild = function() {
			oldBuild.call(this); // Call the original build function first

			const content = document.getElementById("DialogExtensionMenuContent");
			if (!content) return;

			// Avoid adding it multiple times
			if (document.getElementById("GlowAddonButton")) return;

			const button = document.createElement("button");
			button.id = "GlowAddonButton";
			button.innerText = "Activate Glow ✨";
			button.style.marginTop = "10px";
			button.addEventListener("click", () => {
				alert("Glow activated! 🌟");
			});

			content.appendChild(button);
			console.log("[Glow Addon] Glow button added to Extensions menu");
		};
	}
}, 500);
