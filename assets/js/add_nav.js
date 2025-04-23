document.addEventListener("DOMContentLoaded", () => {
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
        <a href="${base_prefix}fun/" class="link">Fun</a>
        <a href="${base_prefix}gallery/" class="link">Picture gallery</a>
        <button id="dark_toggle" aria-label="Toggle dark mode"></button>
    `;

    document.querySelector("nav").innerHTML = nav_html;
});