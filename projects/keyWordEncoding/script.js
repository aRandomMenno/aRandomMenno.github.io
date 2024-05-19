document.getElementById('encoderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const messageInput = document.getElementById('message');
    const keywordInput = document.getElementById('keyword');
    const encodedMessageElement = document.getElementById('encodedMessage');
    const decodeCheckbox = document.getElementById('decodeCheckbox');

    var message = messageInput.value.toLowerCase();
    var keyword = keywordInput.value.toLowerCase();

    if (!message || !keyword) {
        alert("Please fill in both fields.");
        return;
    }

    if (decodeCheckbox.checked) {
        var decodedMessage = decodeMessage(message, keyword);
        encodedMessageElement.textContent = "Decoded Message: " + decodedMessage;
    } else {
        var encodedMessage = encodeMessage(message, keyword);
        encodedMessageElement.textContent = "Encoded Message: " + encodedMessage;
    }
});

function encodeMessage(message, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/'.toLowerCase();
    const keywordLength = keyword.length;
    let encodedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const charIndex = alphabet.indexOf(message[i]);
        const keywordCharIndex = alphabet.indexOf(keyword[i % keywordLength]);
        const shiftAmount = keywordCharIndex;
        const newIndex = (charIndex + shiftAmount) % alphabet.length;
        encodedMessage += alphabet[newIndex];
    }

    return encodedMessage;
}

function decodeMessage(message, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/'.toLowerCase();
    const keywordLength = keyword.length;
    let decodedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const charIndex = alphabet.indexOf(message[i]);
        const keywordCharIndex = alphabet.indexOf(keyword[i % keywordLength]);
        const shiftAmount = keywordCharIndex;
        const newIndex = (charIndex - shiftAmount + alphabet.length) % alphabet.length;
        decodedMessage += alphabet[newIndex];
    }

    return decodedMessage;
}
