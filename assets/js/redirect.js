
function redirect(place) {
    switch (place) {
        case 'home': window.location.href = 'https://aRandomMenno.github.io'; break;
        case 'projects': window.location.href = 'https://aRandomMenno.github.io/projects'; break;
        case 'privacy': window.location.href = 'https://aRandomMenno.github.io/privacy'; break;
        case 'notes': window.location.href = 'https://aRandomMenno.github.io/notes'; break;
        case 'blog': window.location.href = 'https://aRandomMenno.github.io/blog'; break;
        case 'secret': window.location.href = 'https://aRandomMenno.github.io/projects/secrets'; break;
        case 'yt': window.open('https://youtube.com/@aRandomMenno', '_blank'); break;
        case 'github': window.open('https://github.com/arandomMenno/', '_blank'); break;
        case 'discord': window.open('https://discord.gg/vRpeAcKruF', '_blank'); break;
        case 'Spijkenisse': window.open('https://en.wikipedia.org/wiki/Spijkenisse', '_blank'); break;
        case 'Finland': window.open('https://en.wikipedia.org/wiki/Finland', '_blank'); break;
        case 'sourceWebsite': window.open('https://github.com/aRandomMenno/aRandomMenno.github.io', '_blank');
        case 'sourceDiscordBot': window.open('https://github.com/aRandomMenno/MarshMellow-Bot', '_blank');
        case 'sourceTappsBox': window.open('https://github.com/aRandomMenno/TappsBox', '_blank');
        case 'RiMusic': window.open('https://github.com/fast4x/RiMusic', '_blank'); break;
        case 'ViMusic': window.open('https://github.com/vfsfitvnm/ViMusic', '_blank'); break;
        case 'elsaGate': window.open('https://en.wikipedia.org/wiki/Elsagate', '_blank'); break;
        case 'murderdrones': window.open('https://www.youtube.com/playlist?list=PLHovnlOusNLiJz3sm0d5i2Evwa2LDLdrg', '_blank'); break;

        case '': window.open('', '_blank'); // @ empty entry for copy
        default: console.log('Invalid place'); break;
    }
}

function blogDirect(y, m, d) {
    window.location.href = `https://aRandomMenno.github.io/blog/${y}/${m}/${d}`;
}

console.log('Loaded redirect.js')
