document.addEventListener("DOMContentLoaded", () => {
    setNavigation();
    setFooter();
    setEditedDate();
    initMobileScrollBehavior();
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
        <a href="${base_prefix}gallery/" class="link">Picture gallery</a>
        <button id="dark_toggle" aria-label="Toggle dark mode"></button>
    `;

    document.querySelector("nav").innerHTML = nav_html;
}

function setFooter() {
    const footer = document.querySelector("footer");
    const footer_html = `
        <p>&copy; 2025 Menno van Zoelen, all rights reserved.</p>
        <p>Last updated: <span id="last_edited"></span></p>
    `
    footer.innerHTML = footer_html;
}

function setEditedDate() {
    const edit = document.getElementById("last_edited");
    if (!edit) return;
    
    const last_modified = new Date(document.lastModified);
    const day = String(last_modified.getDate()).padStart(2, "0");
    const month = String(last_modified.getMonth() + 1).padStart(2, "0");
    const year = last_modified.getFullYear();
    const formatted_date = `${day}.${month}.${year}`;
    edit.innerHTML = formatted_date;
}

function initMobileScrollBehavior() {
    const header = document.querySelector("header");
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (window.innerWidth <= 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.classList.add("header-hidden");
            } else {
                header.classList.remove("header-hidden");
            }
        } else {
            header.classList.remove("header-hidden");
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener("scroll", requestTick);
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            header.classList.remove("header-hidden");
        }
    });
}
