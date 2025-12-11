
function timeSinceDate() {
  const modDate = new Date(document.lastModified);
  const pad = n => String(n).padStart(2, "0");
  document.querySelector(".LastModified").innerText = `${pad(modDate.getDate())}-${pad(modDate.getMonth() + 1)}-${modDate.getFullYear()} @ ${pad(modDate.getHours())}:${pad(modDate.getMinutes())}`;
}

document.addEventListener("DOMContentLoaded", timeSinceDate());