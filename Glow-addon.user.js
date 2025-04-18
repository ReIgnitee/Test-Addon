// ==UserScript==
// @name         Bondage Club Practice Addon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Practice mod for Bondage Club
// @author       You
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @match        http://localhost:*/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // Dynamically import CSS
    function importCSS(url) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    // Dynamically import JavaScript
    function importJS(url) {
        let script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        document.body.appendChild(script);
    }

    // Import UI and Scripts dynamically
    const baseURL = 'https://reignitee.github.io/Test-Addon/'; // Change this to your GitHub Pages URL
    importCSS(baseURL + 'UI/styles.css');
    importJS(baseURL + 'Scripts/button-handler.js');

    // Load the HTML dynamically
    function loadHTML() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', baseURL + 'UI/button.html', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const container = document.createElement('div');
                container.innerHTML = xhr.responseText;
                document.body.appendChild(container);
            }
        };
        xhr.send();
    }

    // Wait for the page to load, then inject everything
    window.addEventListener('load', () => {
        loadHTML();
    });
})();

