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
// @run-at       document-idle
// ==/UserScript==

import(`https://reignitee.github.io/Test-Addon/Glow-addon/Glow-addon.mjs?v=${(Date.now()/10000).toFixed(0)}`);
