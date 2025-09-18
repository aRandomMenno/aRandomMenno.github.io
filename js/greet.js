// messages = [
//     "Ping pong, my name is <n>Menno</n>!",
//     "Oh hey you're here? My name is <n>Menno</n>!",
//     "Hello visitor, my name is <n>Menno</n>!",
//     "Peek-a-boo! My name is <n>Menno</n>!"
// ];
messages = [
  "Greetings, internet traveler! My name is <n>Menno</n>.",
  "Hello there! My name is <n>Menno</n>.",
  "Hey! My name is <n>Menno</n>.",
  "Hi! My name is <n>Menno</n>.",
  "Welcome! My name is <n>Menno</n>.",
  "Hey there! My name is <n>Menno</n>.",
  "Hello! My name is <n>Menno</n>.",
];

function bday() {
  const birthDate = new Date("2007-11-07");
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('greetings').innerHTML = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("age").innerText = bday();
});