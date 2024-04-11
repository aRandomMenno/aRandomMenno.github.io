
function redirect(place) {
  switch (place) {
    case 'home': window.location.href = 'https://aRandomMenno.github.io'; break;
    case 'projects': window.location.href = 'https://aRandomMenno.github.io/projects'; break;
    case 'privacy': window.location.href = 'https://aRandomMenno.github.io/privacy'; break;
    case 'blog': window.location.href = 'https://aRandomMenno.github.io/blog'; break;
    case 'yt': window.open('https://youtube.com/@aRandomMenno', '_blank'); break;
    case 'Spijkenisse': window.open('https://en.wikipedia.org/wiki/Spijkenisse', '_blank'); break;
    case 'Finland': window.open('https://en.wikipedia.org/wiki/Finland', '_blank'); break;
    case 'github': window.open('https://github.com/arandomMenno/', '_blank'); break;
    case 'discord': window.open('https://discord.gg/vRpeAcKruF', '_blank'); break;
    case 'RiMusic': window.open('https://github.com/fast4x/RiMusic', '_blank'); break;
    case 'ViMusic': window.open('https://github.com/vfsfitvnm/ViMusic', '_blank'); break;
    case 'murderdrones': window.open('https://www.youtube.com/playlist?list=PLHovnlOusNLiJz3sm0d5i2Evwa2LDLdrg', '_blank'); break;
    default: console.log('Invalid place');
  }
}

function april2024(place) {
  window.location.href = `https://aRandomMenno.github.io/blog/2024/april/${place}`;
}
