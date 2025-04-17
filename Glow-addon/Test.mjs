console.log("[Glow Addon] Core module loaded");

const waitForGame = setInterval(() => {
    if (typeof Player !== "undefined" && document.getElementById("SideMenu")) {
        clearInterval(waitForGame);

        const extButton = document.querySelector("button[onclick='DialogExtensionMenuShow()']");
        if (!extButton) return;

        const button = document.createElement("button");
        button.textContent = "Activate Glow";
        button.style.marginTop = "10px";
        button.addEventListener("click", () => {
            alert("Glow activated! ✨");
        });

        // Wait for the Extensions dialog to be open before appending
        const oldFunc = window.DialogExtensionMenuBuild;
        window.DialogExtensionMenuBuild = function() {
            oldFunc.call(this);
            const content = document.getElementById("DialogExtensionMenuContent");
            if (content && !document.getElementById("GlowAddonButton")) {
                button.id = "GlowAddonButton";
                content.appendChild(button);
            }
        };
    }
}, 500);
