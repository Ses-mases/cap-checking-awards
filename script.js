document.addEventListener('DOMContentLoaded', () => {
    const _a = ['hidden', 'click', 'data.json', 'tracks-grid', 'albums-grid', 'artists-grid', 'track', 'album', 'artist', 'vote-button', 'main-title', 'overlay', 'close-modal', 'secret-overlay', 'secret-close-modal', 'code-input', 'keydown', 'Escape', 'input', 'toUpperCase', 'Backspace', 'GOAT', 'secret.html', '_blank'];
    const v1 = document.getElementById(_a[11]), v2 = document.getElementById(_a[12]), v3 = document.getElementById(_a[10]), v4 = document.getElementById(_a[13]), v5 = document.getElementById(_a[14]), v6 = document.querySelectorAll(`.${_a[15]}`);
    let c1 = 0;
    const f1 = () => v1.classList.remove(_a[0]); const f2 = () => v1.classList.add(_a[0]);
    const f3 = () => v4.classList.remove(_a[0]); const f4 = () => { v4.classList.add(_a[0]); v6.forEach(i => i.value = ''); };
    
    fetch(_a[2]).then(r => r.json()).then(d => { f7(_a[3], d.tracks, _a[6]); f7(_a[4], d.albums, _a[7]); f7(_a[5], d.artists, _a[8]); }).catch(e => console.error('E:', e));
    
    const f6 = (i, t) => { const c = document.createElement('div'); if (t === _a[6] || t === _a[7]) c.className = 'nominee-card'; let ti = i.title || i.name, su = i.artist || i.genre, sr = i.image || 'https://picsum.photos/300'; c.innerHTML = `<img src="${sr}" alt="${ti}"><h3>${ti}</h3><p>${su}</p><button class="vote-button">${'Голосовать'}</button>`; return c; };
    const f7 = (g, i, t) => { const gr = document.getElementById(g); if(gr) i.forEach(it => gr.appendChild(f6(it, t))); };
    
    document.body.addEventListener(_a[1], (e) => { if (e.target.classList.contains(_a[9])) { e.preventDefault(); f1(); } });
    v2.addEventListener(_a[1], f2); v1.addEventListener(_a[1], (e) => e.target === v1 && f2());
    v3.addEventListener(_a[1], () => { c1++; if (c1 === 5) { f3(); v6[0].focus(); c1 = 0; } });
    v5.addEventListener(_a[1], f4); v4.addEventListener(_a[1], (e) => e.target === v4 && f4());
    document.addEventListener(_a[16], (e) => { if (e.key === _a[17]) { if (!v1.classList.contains(_a[0])) f2(); if (!v4.classList.contains(_a[0])) f4(); } });

    function f5() { const c = [...v6].map(i => i.value).join(''); if (c.length === 4) { if (c === _a[21]) { window.open(_a[22], _a[23]); f4(); } } }
    v6.forEach((i, x) => { i.addEventListener(_a[18], () => { i.value = i.value[_a[19]](); if (i.value && x < v6.length - 1) { v6[x + 1].focus(); } f5(); }); i.addEventListener(_a[16], (e) => { if (e.key === _a[20] && !i.value && x > 0) { v6[x - 1].focus(); } }); });
});