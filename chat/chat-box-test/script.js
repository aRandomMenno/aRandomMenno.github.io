// Get references to HTML elements
const chatbox = document.getElementById("chatbox");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

// Load existing messages from localStorage
window.addEventListener("DOMContentLoaded", loadMessages);

// Event listener for send button click
sendButton.addEventListener("click", sendMessage);

// Event listener for pressing Enter key
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Function to load messages from localStorage
function loadMessages() {
    const storedMessages = localStorage.getItem("chatMessages");

    if (storedMessages) {
        chatbox.innerHTML = storedMessages;
    }
}

// Function to send a message
function sendMessage() {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username !== "" && message !== "") {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        chatbox.appendChild(messageElement);

        // Save message to localStorage
        localStorage.setItem("chatMessages", chatbox.innerHTML);

        // Clear input fields
        usernameInput.value = "";
        messageInput.value = "";

        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
