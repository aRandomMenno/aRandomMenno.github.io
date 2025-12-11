const tldrEl = document.querySelector(".tldr");
const tldrBtn = document.querySelector(".tldr-btn");

document.querySelector(".tldr-btn").addEventListener("click", () => {
  tldrEl.style.display = tldrEl.style.display === "none" ? "block" : "none";
  tldrBtn.innerText = tldrBtn.innerText === "Show TL:DR" ? "Hide TL:DR" : "Show TL:DR";
});