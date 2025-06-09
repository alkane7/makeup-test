// Written by mlazze@globocorp.com - email me at mlazze1337dev@gmail.com for freelance work!
var messages = [];
var count = 0;

/**
 * Handles sending a user message and simulating a bot response.
 */
function send() {
    var input = document.getElementById('input');
    var prompt = input.value;

    // Check if the input is empty
    if (prompt == '') {
        alert('Type something!');
        return;
    }

    count++;
    messages.push(prompt);

    var chat = document.getElementById('chat');
    chat.innerHTML += '<div class="message-user"><div class="label">YOU</div><div class="bubble user">' + prompt + '</div></div>';
    input.value = '';

    // TODO: Simulate the chat for now
    // replace with a to askGPTGenie(prompt)

    setTimeout(function() {
        var replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
        var reply = replies[Math.floor(Math.random() * replies.length)];
        chat.innerHTML += '<div class="message-bot"><div class="label">GENIE</div><div class="bubble bot">' + reply + '</div></div>';
        chat.scrollTop = chat.scrollHeight;
    }, 500);
    // End Simulate

}

var appVersion = "1.0";
var appName = "GloboCorp's GPT Genie";
console.log(appName + " " + appVersion + " loaded @ " + new Date());

// Simple custom element: <send-button>
class SendButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button id="send-button">Send</button>`;
    }
}
customElements.define('send-button', SendButton);

/**
 * Initializes event listeners when the window loads:
 * - Click on "Send" button
 * - Press Enter key in the input field
 */
window.onload = function () {
	document.getElementById('send-button').addEventListener('click', send);
	document.getElementById('input').addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            send();
        }
    });
    
};