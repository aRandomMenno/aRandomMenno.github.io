const tldrEl = document.querySelector(".tldr");
const tldrBtn = document.querySelector(".tldr-btn");

document.querySelector(".tldr-btn").addEventListener("click", () => {
  tldrEl.style.display = tldrEl.style.display === "none" ? "block" : "none";
  if (currentLang === "en") tldrBtn.innerText = tldrBtn.innerText === "Show summary" ? "Hide summary" : "Show summary";
  if (currentLang === "nl") tldrBtn.innerText = tldrBtn.innerText === "Laat samenvatting zien" ? "Verberg samenvatting" : "Laat samenvatting zien";
});