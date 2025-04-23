document.addEventListener("DOMContentLoaded", function() {
    const dark_toggle = document.querySelector("#dark_toggle");
    const dark_mode = localStorage.getItem("dark_mode") === "true";
    
    if (dark_mode === null && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        localStorage.setItem("dark_mode", true);
    } else {
        setDarkMode(dark_mode);
    }
    
    dark_toggle.addEventListener("click", function() {
        const is_dark = document.documentElement.getAttribute("data_theme") === "dark";
        setDarkMode(!is_dark);
        localStorage.setItem("dark_mode", !is_dark);
    });
    
    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.setAttribute("data_theme", "dark");
            dark_toggle.classList.add("active");
        } else {
            document.documentElement.setAttribute("data_theme", "light");
            dark_toggle.classList.remove("active");
        }
    }
});