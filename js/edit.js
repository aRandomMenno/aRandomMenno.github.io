
function timeSinceDate() {
  const modDate = new Date(document.lastModified);
  const pad = n => String(n).padStart(2, "0");
  let prefix;
  if (currentLang === "en") prefix = "Last edit:";
  if (currentLang === "nl") prefix = "Laatste verandering: ";
  document.querySelector(".LastModified").innerText = `${prefix} ${pad(modDate.getDate())}-${pad(modDate.getMonth() + 1)}-${modDate.getFullYear()} @ ${pad(modDate.getHours())}:${pad(modDate.getMinutes())}`;
}

document.addEventListener("DOMContentLoaded", timeSinceDate());