// --- A way to complex js function to create a loading animation of text... ---
// @ Crafted by Menno, with assistance of LLM's (<6% of actual code is GenAI)

// Doesn't feel right, but works good enough for now. Gotta fix.

let percent = 0;
let stateLength = 0;
let state = "normal";
let isLoading = true;
let incrementDelay = 0;
let stateChangeCooldown = 0;
const Percentage = document.getElementById("percentage");
const LoadingText = document.getElementById("loading-text");

function loadAnimation() {
  if (percent > 100 || !isLoading) {
    LoadingText.innerText = "Loading complete!";
    percent = 0;
    isLoading = false;
    return;
  }

  Percentage.innerText = `${percent}%`;
  if (stateLength <= 0 && stateChangeCooldown <= 0) {
    const randomChance = Math.floor(Math.random() * 100);
    if (randomChance < 6) {
      state = "fast";
      stateLength = Math.floor(Math.random() * 8) + 4;
      stateChangeCooldown = Math.floor(Math.random() * 4) + 4;
    } else if (randomChance > 94) {
      state = "slow";
      stateLength = Math.floor(Math.random() * 6) + 8;
      stateChangeCooldown = Math.floor(Math.random() * 2) + 8;
    } else {
      state = "normal";
      stateLength = 0;
      stateChangeCooldown = 5;
    }
  }

  if (state === "normal") {
    incrementDelay = Math.floor(Math.random() * 60 + 40);
    percent++;
    if (stateChangeCooldown > 0) stateChangeCooldown--;
  }
  else if (state === "fast") {
    incrementDelay = Math.floor(Math.random() * 15 + 10);
    stateLength--;
    if (stateLength <= 0) {
      state = "normal";
    }
    percent++;
  }
  else if (state === "slow") {
    incrementDelay = Math.floor(Math.random() * 125 + 125);
    stateLength--;
    if (stateLength <= 0) {
      state = "normal";
    }
    percent++;
  }

  if (isLoading && percent <= 101) {
    setTimeout(loadAnimation, incrementDelay);
  }
}

document.addEventListener("DOMContentLoaded", loadAnimation);