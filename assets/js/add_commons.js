document.addEventListener("DOMContentLoaded", () => {
    setNavigation();
    setFooter();
    setEditedDate();
});

function setNavigation() {
    const current_path = window.location.pathname;
    let directory_path = current_path;

    if (!directory_path.endsWith("/")) {
        directory_path = directory_path.substring(0, directory_path.lastIndexOf("/") + 1);
    }

    const path_segments = directory_path.split("/").filter(segment => segment.length > 0);
    const depth = path_segments.length;
    const base_prefix = depth === 0 ? "./" : "../".repeat(depth);

    const nav_html = `
        <a href="${base_prefix}" class="link">Home</a>
        <a href="${base_prefix}projects/" class="link">Projects</a>
        <a href="${base_prefix}experiments/" class="link">Experiments</a>
        <a href="${base_prefix}gallery/" class="link">Picture gallery</a>
        <button id="dark_toggle" aria-label="Toggle dark mode"></button>
    `;

    document.querySelector("nav").innerHTML = nav_html;
}

function setFooter() {
    const footer = document.querySelector("footer");
    const footer_html = `
        <p>&copy; 2025 Menno van Zoelen, all rights reserved.</p>
        <p>
            <a href="https://www.github.com/arandommenno/" class="link" target="_blank" tabindex="0">myGithub</a>
        </p>
        <p>
            <a href="https://signal.me/#eu/0OLO6qJBbLzyAo8nilPOaU8CFgUZocUNhUPe9CvRaPSOw5f4ZJtPLqd5jYP7Ai3b" class="link" target="_blank" tabindex="0">my Signal</a>
        </p>
    `
    footer.innerHTML = footer_html;
}

function setEditedDate() {
    const edit = document.getElementById("last_edited");
    const last_modified = new Date(document.lastModified);

    const day = String(last_modified.getDate()).padStart(2, "0");
    const month = String(last_modified.getMonth() + 1).padStart(2, "0");
    const year = last_modified.getFullYear();

    const formatted_date = `${day}.${month}.${year}`;
    edit.innerHTML = formatted_date;
}
