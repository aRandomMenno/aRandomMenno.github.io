messages = [
    "Ping pong, my name is <im>Menno</im>!",
    // "01001000 01100101 01101100 01101100 01101111, my name is <im>Menno</im>!",
    "Oh hey you're here? My name is <im>Menno</im>!",
    "Hello visitor, my name is <im>Menno</im>!",
    // "You've made it to Menno's website!",
    "Peek-a-boo! My name is <im>Menno</im>!"
];

document.addEventListener('DOMContentLoaded', () => {
    const index = Math.floor(Math.random() * messages.length);
    document.getElementById('welcome_message').innerHTML = messages[index];
});