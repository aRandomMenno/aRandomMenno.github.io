let percent = 0;
const Percentage = document.getElementById("percentage");
const LoadingText = document.getElementById("loading-text");

function startLoader() {
  let runningTime = 0;
  for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
      runningTime += Math.random() * 50 + 10;
      percent++;
      Percentage.innerText = percent + "%";
      if (percent === 100) {
        LoadingText.innerText = "Loading complete!";
      }
    }, runningTime + i * 100)
  }
}

document.addEventListener("DOMContentLoaded", startLoader);