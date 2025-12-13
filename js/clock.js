const clockEl = document.querySelector(".clock");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  if (window.innerWidth >= 1200) {
    setTimeout(updateClock, 250);
  } else {
    setTimeout(updateClock, 1500);
  }
}

updateClock();