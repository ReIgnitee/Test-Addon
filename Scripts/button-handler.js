// scripts/button-handler.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('addonButton');
    
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!'); // Example action
        });
    }
});
