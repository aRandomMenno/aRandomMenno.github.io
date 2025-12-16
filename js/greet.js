const messages = {
  "en": {
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
  },
  "nl": {
    "morning": [
      "Goedemorgen!",
      "Ben je al wakker?",
      "Een hele goede morgen!",
      "Hallo daar, vroege vogel!",
      "Wakker worden, tijd voor ontbijt!",
    ],
    "afternoon": [
      "Hoi, internetreiziger!",
      "Goedemiddag!",
      "Hallo daar!",
      "Groeten!",
      "Ik hoop dat je een fijne dag hebt!",
    ],
    "evening": [
      "Goedenavond!",
      "Fijne avond!",
      "Ik hoop dat je een fijne avond hebt.",
      "Groeten!",
      "Ahoy, avondreiziger!",
    ],
    "night": [
      "Nog laat aan het werk?",
      "Goedenavond, nachtuil!",
      "Hallo daar, late bezoeker!",
      "Groeten, internetreiziger!",
      "Je hebt de nachtdienst bereikt!",
    ]
  }
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
  let naam;
  document.querySelector(".greetings").innerHTML = (() => {
    const msgs = messages[currentLang][timeOfDay];
    if (currentLang === "en") naam = " Mijn naam is <n>Menno</n>.";
    if (currentLang === "nl") naam = " My name is <n>Menno</n>.";
    return msgs[Math.floor(Math.random() * msgs.length)] + naam;
  })();
  document.querySelectorAll(".age").forEach(ageEl => { ageEl.textContent = bday() });
});