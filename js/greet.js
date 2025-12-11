const messages = {
  "morning": [
    "Good morning!",
    "Rise and shine!",
    "Top of the morning to you!",
    "Hello there, early bird!",
    "Wakey wakey, eggs and bakey!",
  ],
  "afternoon": [
    "Hi, internet traveler!",
    "Good afternoon!",
    "Hey there!",
    "Greetings!",
    "Hope you're having a great day!",
  ],
  "evening": [
    "Evening!",
    "Good evening!",
    "Hope you're having a nice evening.",
    "Greetings!",
    "Aye, evening traveler!",
  ],
  "night": [
    "Burning the midnight oil?",
    "Good evening, night owl!",
    "Ello there, late night visitor!",
    "Greetings, internet traveler!",
    "You've made it to the night shift!",
  ]
}

function bday() {
  const birthDate = new Date("2007-11-07");
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const hour = new Date().getHours();
const timeOfDay = hour >= 6 && hour < 12 ? "morning" : hour >= 12 && hour < 18 ? "afternoon" : hour >= 18 ? "evening" : "night";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".greetings").innerHTML = (() => {
    const msgs = messages[timeOfDay];
    return msgs[Math.floor(Math.random() * msgs.length)] + " My name is <n>Menno</n>.";
  })();
  document.querySelectorAll(".age").forEach(ageEl => { ageEl.textContent = bday() });
});