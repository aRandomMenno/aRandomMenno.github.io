
const themeBlue = `:root {
  --color-text: #ffffff;
  --color-div-background: #658ef2;
  --color-div-border: #7a71f8;
  --color-link: #000000;
  
  --color-handle-scrollbar: #3bcae5;
} `;

const themeGreen = `:root {
  --color-text: #ffffff;
  --color-div-background: #4f5e37;
  --color-div-border: #242b19;
  --color-link: #000000;
  
  --color-handle-scrollbar: #a5c473;
}`;

const themePink = `:root {
  --color-text: #ffffff;
  --color-div-background: #cc35af;
  --color-div-border: #f430ac;
  --color-link: #000000;
  
  --color-handle-scrollbar: #7c40b6;
}`;

const themePurple = `:root {
  --color-text: #ffffff;
  --color-div-background: #773398;
  --color-div-border: #512889;
  --color-link: #000000;
  
  --color-handle-scrollbar: #ff5ccc;
}`;

const themeRed = `:root {
  --color-text: #ffffff;
  --color-div-background: #79021c;
  --color-div-border: #3d010e;
  --color-link: #000000;
  
  --color-handle-scrollbar: #f50538;
}`;

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the saved theme from localStorage
  var activeTheme = localStorage.getItem('selectedTheme');
  console.log(activeTheme)

  // Apply the saved theme if it exists
  if (activeTheme) {
    switch (activeTheme) {
      case 'blue':
        blue();
        break;
      case 'pink':
        pink();
        break;
      case 'red':
        red();
        break;
      case 'green':
        green();
        break;
      case 'purple':
        purple()
    }
  }
});

function applyTheme(themeCSS) {
  const existingStyles = document.getElementById('dynamic-theme-styles');
  if (existingStyles) {
    existingStyles.remove();
  }
 
  const styleElement = document.createElement('style');
  styleElement.id = 'dynamic-theme-styles';
  styleElement.innerHTML = themeCSS;
 
  document.head.appendChild(styleElement);
}
 
function blue() {
  localStorage.setItem('selectedTheme', 'blue');
  applyTheme(themeBlue);
}
 
function pink() {
  localStorage.setItem('selectedTheme', 'pink');
  applyTheme(themePink);
}
 
function red() {
  localStorage.setItem('selectedTheme', 'red');
  applyTheme(themeRed);
}
 
function green() {
  localStorage.setItem('selectedTheme', 'green');
  applyTheme(themeGreen);
}

function purple() {
  localStorage.setItem('selectedTheme', 'purple');
  applyTheme(themePurple);
}

var showThemesBtn = document.querySelector('.showThemes-btn');
var themeBtnsDiv = document.querySelector('.theme-btns');

function toggleThemes() {
  if (themeBtnsDiv.style.display === 'none') {
    themeBtnsDiv.style.display = 'unset';
  } else {
    themeBtnsDiv.style.display = 'none';
  }
}

console.log("[INFO] Executed themes.js")
