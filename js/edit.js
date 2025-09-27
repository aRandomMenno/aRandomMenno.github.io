
function timeSinceDate() {
  const ModifiedEl = document.getElementById("LastModified");
  const LastModified = new Date(document.lastModified);
  let FormattedDate = `${String(LastModified.getDate()).padStart(2, "0")}`;
  FormattedDate += `-${String(LastModified.getMonth() + 1).padStart(2, "0")}`;
  FormattedDate += `-${LastModified.getFullYear()} @ `;
  FormattedDate += `${String(LastModified.getHours()).padStart(2, "0")}:`;
  FormattedDate += `${String(LastModified.getMinutes()).padStart(2, "0")}`;
  ModifiedEl.innerText = FormattedDate;
}

document.addEventListener("DOMContentLoaded", timeSinceDate);