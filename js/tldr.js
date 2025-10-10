const tldrEl = document.getElementById("tldr");
const tldrBtn = document.getElementById("tldr-btn");

document.getElementById("tldr-btn").addEventListener("click", () => {
  tldrEl.style.display = tldrEl.style.display === "none" ? "block" : "none";
  tldrBtn.innerText = tldrBtn.innerText === "Show TL:DR" ? "Hide TL:DR" : "Show TL:DR";
});