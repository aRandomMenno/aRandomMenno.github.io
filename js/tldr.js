const tldrEl = document.querySelector(".tldr");
const tldrBtn = document.querySelector(".tldr-btn");

document.querySelector(".tldr-btn").addEventListener("click", () => {
  tldrEl.style.display = tldrEl.style.display === "none" ? "block" : "none";
  if (currentLang === "en") tldrBtn.innerText = tldrBtn.innerText === "Show TL:DR" ? "Hide TL:DR" : "Show TL:DR";
  if (currentLang === "nl") tldrBtn.innerText = tldrBtn.innerText === "Laat TL:DR zien" ? "Verberg TL:DR" : "Laat TL:DR zien";
});