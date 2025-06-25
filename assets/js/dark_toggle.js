document.addEventListener("DOMContentLoaded", function() {
    const darkToggle = document.querySelector("#dark_toggle");
    if (!darkToggle) return;
    
    const currentTheme = document.documentElement.getAttribute("data_theme");
    const isDark = currentTheme === "dark";
    
    if (isDark) {
        darkToggle.classList.add("active");
    } else {
        darkToggle.classList.remove("active");
    }
    
    darkToggle.addEventListener("click", function() {
        const isCurrentlyDark = document.documentElement.getAttribute("data_theme") === "dark";
        setDarkMode(!isCurrentlyDark);
        localStorage.setItem("dark_mode", !isCurrentlyDark);
    });
    
    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.setAttribute("data_theme", "dark");
            darkToggle.classList.add("active");
        } else {
            document.documentElement.setAttribute("data_theme", "light");
            darkToggle.classList.remove("active");
        }
    }
});