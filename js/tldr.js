document.getElementById("tldr-btn").addEventListener("click", () => {
  const el = document.getElementById("tldr");
  if (el.style.display === "none") {
    el.style.display = "inline";
  } else {
    el.style.display = "none";
  }
});