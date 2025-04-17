// ==UserScript==
// @name         BC Glow Addon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a glow effect around your character
// @author       You
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @grant        none
// @updateURL	https://reignitee.github.io/Test-Addon/Glow-addon/Glow-addon.user.js
// @downloadURL	https://reignitee.github.io/Test-Addon/Glow-addon/Glow-addon.user.js
// ==/UserScript==

(function() {
    'use strict';
	
	const waitforlogin = setInterval(() => {
		if(typeof Player !== "undefined" && Player,Name){
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
