document.addEventListener('DOMContentLoaded', () => {
    const _0xoverlay = document.getElementById('overlay');
    const _0xcloseModal = document.getElementById('close-modal');
    const _0xmodalContent = document.getElementById('modal-content');
    const _0xmainTitle = document.getElementById('main-title');
    const _0xsecretOverlay = document.getElementById('secret-overlay');
    const _0xsecretClose = document.getElementById('secret-close-modal');
    const _0xcodeInputs = document.querySelectorAll('.code-input');
    
    const _0xstrings = {
        pActive: atob('cHJvdG9jb2xBY3RpdmF0ZWQ='),
        sUserId: atob('c2ltdWxhdGVkVXNlcklk'),
        trueVal: atob('dHJ1ZQ=='),
        secretCode: atob('R09BVA==')
    };

    let _0xclickCounter = 0;

    const _0xfnShowModal = () => _0xoverlay.classList.remove('hidden');
    const _0xfnHideModal = () => _0xoverlay.classList.add('hidden');
    
    const _0xfnShowSecret = () => _0xsecretOverlay.classList.remove('hidden');
    const _0xfnHideSecret = () => {
        _0xsecretOverlay.classList.add('hidden');
        _0xcodeInputs.forEach(input => input.value = '');
    };

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            _0xfnPopulate('tracks-grid', data.tracks, 'track');
            _0xfnPopulate('albums-grid', data.albums, 'album');
            _0xfnPopulate('artists-grid', data.artists, 'artist');
        })
        .catch(error => console.error('Data Error:', error));

    const _0xfnCreateCard = (item, type) => {
        const card = document.createElement('div');
        if (type === 'track' || type === 'album') card.className = 'nominee-card';
        let title = item.title || item.name;
        let subtitle = item.artist || item.genre;
        let imageSrc = item.image || 'https://picsum.photos/300';
        card.innerHTML = `<img src="${imageSrc}" alt="${title}"><h3>${title}</h3><p>${subtitle}</p><button class="vote-button">Голосовать</button>`;
        return card;
    };

    const _0xfnPopulate = (gridId, items, type) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        items.forEach(item => grid.appendChild(_0xfnCreateCard(item, type)));
    };
    
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('vote-button')) {
            e.preventDefault();
            
            if (localStorage.getItem(_0xstrings.pActive) === _0xstrings.trueVal) {
                
                let userId = localStorage.getItem(_0xstrings.sUserId);
                if (!userId) {
                    userId = Math.floor(Math.random() * 10000); 
                    localStorage.setItem(_0xstrings.sUserId, userId); 
                }

                const imgRepo = 'https://i.postimg.cc/';
                const images = [
                    `${imgRepo}FzZ85Wgy/code-0000-4.png`,
                    `${imgRepo}rmzvWXWK/code-0001-3.png`,
                    `${imgRepo}bYgtr7gQ/code-0002-2.png`,
                    `${imgRepo}4NMnhs9h/code-0003-1.png`
                ];
                
                const imageIndex = userId % 4;
                _0xmodalContent.innerHTML = `<img src="${images[imageIndex]}" alt="Special Image" style="max-width: 100%; border-radius: 8px;">`;

            } else {
                _0xmodalContent.innerHTML = '<p>К сожалению, наш сервис ещё не запущен</p>';
            }
            
            _0xfnShowModal();
        }
    });

    _0xcloseModal.addEventListener('click', _0xfnHideModal);
    _0xoverlay.addEventListener('click', (e) => e.target === _0xoverlay && _0xfnHideModal());

    _0xmainTitle.addEventListener('click', () => {
        _0xclickCounter++;
        if (_0xclickCounter === 5) {
            _0xfnShowSecret();
            _0xcodeInputs[0].focus();
            _0xclickCounter = 0;
        }
    });

    _0xsecretClose.addEventListener('click', _0xfnHideSecret);
    _0xsecretOverlay.addEventListener('click', (e) => e.target === _0xsecretOverlay && _0xfnHideSecret());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!_0xoverlay.classList.contains('hidden')) _0xfnHideModal();
            if (!_0xsecretOverlay.classList.contains('hidden')) _0xfnHideSecret();
        }
    });

    _0xcodeInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            input.value = input.value.toUpperCase();
            if (input.value && index < _0xcodeInputs.length - 1) {
                _0xcodeInputs[index + 1].focus();
            }
            _0xfnCheckCode();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                _0xcodeInputs[index - 1].focus();
            }
        });
    });

    function _0xfnCheckCode() {
        const code = [..._0xcodeInputs].map(input => input.value).join('');
        if (code.length === 4) {
            if (code === _0xstrings.secretCode) {
                window.open('bad_times.html', '_blank');
                _0xfnHideSecret();
            }
        }
    }
});