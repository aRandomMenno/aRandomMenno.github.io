
const BASE_URL = 'https://aRandomMenno.github.io';
const LINKS = {
    home: `${BASE_URL}`,
    projects: `${BASE_URL}/projects`,
    privacy: `${BASE_URL}/privacy`,
    notes: `${BASE_URL}/notes`,
    blog: `${BASE_URL}/blog`,
    info: `${BASE_URL}/info`,
    secret: `${BASE_URL}/projects/secrets`,
    yt: 'https://youtube.com/@aRandomMenno',
    github: 'https://github.com/arandomMenno/',
    discord: 'https://discord.gg/vRpeAcKruF',
    steam: 'https://steamcommunity.com/id/aRandomMenno/',
    Spijkenisse: 'https://en.wikipedia.org/wiki/Spijkenisse',
    Finland: 'https://en.wikipedia.org/wiki/Finland',
    sourceWebsite: 'https://github.com/aRandomMenno/aRandomMenno.github.io',
    sourceDiscordBot: 'https://github.com/aRandomMenno/MarshMellow-Bot',
    sourceTappsBox: 'https://github.com/aRandomMenno/TappsBox',
    RiMusic: 'https://github.com/fast4x/RiMusic',
    ViMusic: 'https://github.com/vfsfitvnm/ViMusic',
    elsaGate: 'https://en.wikipedia.org/wiki/Elsagate',
    murderdrones: 'https://www.youtube.com/playlist?list=PLHovnlOusNLiJz3sm0d5i2Evwa2LDLdrg'
};

function redirect(place) {
    const url = LINKS[place] || '';
    if (url.startsWith(BASE_URL)) {
        window.location.href = url;
    } else {
        window.open(url, '_blank');
    }
}

function blogDirect(y, m, d) {
    window.location.href = `https://aRandomMenno.github.io/blog/${y}/${m}/${d}`;
}

console.info('Loaded redirect.js');
