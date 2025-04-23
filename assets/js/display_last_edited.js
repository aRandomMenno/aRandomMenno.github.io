document.addEventListener("DOMContentLoaded", () => {
	const edit = document.getElementById("last_edited")
	const last_modified = new Date(document.lastModified)

	const day = String(last_modified.getDate()).padStart(2, "0")
	const month = String(last_modified.getMonth() + 1).padStart(2, "0")
	const year = last_modified.getFullYear()

	const formatted_date = `${day}.${month}.${year}`
	edit.innerHTML = formatted_date
})