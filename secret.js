document.addEventListener('DOMContentLoaded', () => {

    const secretDaySelect = document.getElementById('secret-day');
    const secretMonthSelect = document.getElementById('secret-month');

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        secretDaySelect.appendChild(option);
    }

    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    months.forEach((monthName, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = monthName;
        secretMonthSelect.appendChild(option);
    });

    function checkAndSaveSecretDate() {
        const day = parseInt(secretDaySelect.value, 10);
        const month = parseInt(secretMonthSelect.value, 10);

        if (day === 20 && month === 8) {
            localStorage.setItem('protocolActivated', 'true');
        } else {
            localStorage.removeItem('protocolActivated');
        }
        
        localStorage.setItem('savedDay', day);
        localStorage.setItem('savedMonth', month);
    }

    function loadSavedDate() {
        const savedDay = localStorage.getItem('savedDay');
        const savedMonth = localStorage.getItem('savedMonth');

        if (savedDay) {
            secretDaySelect.value = savedDay;
        }
        if (savedMonth) {
            secretMonthSelect.value = savedMonth;
        }
    }

    loadSavedDate();
    checkAndSaveSecretDate();

    secretDaySelect.addEventListener('change', checkAndSaveSecretDate);
    secretMonthSelect.addEventListener('change', checkAndSaveSecretDate);

    const encodedText = [1055, 1086, 32, 1083, 1077, 1089, 1091, 32, 1073, 1088, 1105, 1083, 32, 1082, 1086, 1083, 1102, 1095, 1080, 1081, 44, 32, 1078, 1072, 1076, 1085, 1099, 1081, 32, 1076, 1074, 1072, 1076, 1094, 1072, 1090, 1086, 1077, 46, 32, 1054, 1085, 32, 1074, 1089, 1077, 32, 1075, 1088, 1080, 1073, 1099, 32, 1074, 1087, 1088, 1086, 1082, 32, 1089, 1086, 1073, 1080, 1088, 1072, 1083, 44, 32, 1093, 1086, 1090, 1103, 32, 1080, 32, 1089, 1098, 1077, 1089, 1090, 1100, 32, 1089, 1090, 1086, 1083, 1100, 1082, 1086, 32, 1085, 1077, 32, 1084, 1086, 1075, 46, 32, 1059, 32, 1079, 1072, 1081, 1094, 1072, 32, 1080, 1079, 32, 1082, 1086, 1088, 1079, 1080, 1085, 1099, 32, 1074, 1089, 1105, 32, 1091, 1082, 1088, 1072, 1083, 44, 32, 1091, 32, 1073, 1077, 1083, 1082, 1080, 32, 1074, 1099, 1090, 1072, 1097, 1080, 1083, 32, 1079, 1072, 1087, 1072, 1089, 1099, 44, 32, 1073, 1077, 1083, 1100, 1095, 1086, 1085, 1082, 1072, 32, 1084, 1077, 1083, 1082, 1086, 1075, 1086, 32, 1089, 1077, 1085, 1090, 1103, 1073, 1088, 1103, 32, 1075, 1086, 1083, 1086, 1076, 1072, 1090, 1100, 32, 1074, 32, 1076, 1091, 1087, 1083, 1077, 46, 32, 1054, 1085, 32, 1074, 1089, 1077, 32, 1075, 1088, 1080, 1073, 1099, 32, 1090, 1072, 1097, 1080, 1083, 32, 1082, 32, 1089, 1077, 1073, 1077, 44, 32, 1079, 1072, 1082, 1072, 1087, 1099, 1074, 1072, 1083, 32, 1074, 32, 1089, 1074, 1086, 1077, 1081, 32, 1085, 1086, 1088, 1077, 46, 32, 1047, 1072, 1073, 1086, 1088, 1086, 1084, 32, 1074, 1093, 1086, 1076, 32, 1086, 1085, 32, 1086, 1075, 1088, 1072, 1076, 1080, 1083, 44, 32, 1085, 1072, 1089, 1090, 1072, 1074, 1080, 1083, 32, 1087, 1072, 1082, 1086, 1089, 1090, 1085, 1099, 1093, 32, 1083, 1086, 1074, 1091, 1096, 1077, 1082, 44, 32, 1095, 1090, 1086, 1073, 32, 1085, 1080, 1082, 1090, 1086, 32, 1080, 1079, 32, 1079, 1074, 1077, 1088, 1077, 1081, 32, 1085, 1077, 32, 1079, 1072, 1093, 1086, 1076, 1080, 1083, 46, 32, 1058, 1072, 1082, 32, 1080, 32, 1086, 1089, 1090, 1072, 1083, 1089, 1103, 32, 1105, 1078, 32, 1101, 1090, 1072, 44, 32, 1079, 1072, 1073, 1099, 1083, 1080, 32, 1080, 32, 1079, 1072, 1073, 1080, 1083, 1080, 32, 1085, 1072, 32, 1085, 1077, 1075, 1086, 46, 32, 1054, 1085, 32, 1087, 1088, 1080, 1073, 1086, 1083, 1077, 1083, 44, 32, 1083, 1077, 1078, 1072, 1083, 44, 32, 1089, 1090, 1086, 1085, 1072, 1083, 44, 32, 1089, 1090, 1088, 1072, 1085, 1080, 1094, 1072, 32, 1078, 1077, 32, 1090, 1072, 1082, 32, 1080, 32, 1085, 1077, 32, 1087, 1088, 1080, 1096, 1105, 1083, 32, 1085, 1080, 1082, 1090, 1086, 46, 32, 1054, 1076, 1085, 1080, 32, 1075, 1088, 1080, 1073, 1099, 32, 1082, 1088, 1091, 1075, 1086, 1084, 44, 32, 1076, 1072, 32, 1089, 1084, 1088, 1072, 1076, 44, 32, 1080, 32, 1079, 1072, 1087, 1072, 1093, 32, 1075, 1085, 1080, 1083, 1080, 46, 32, 1047, 1072, 1095, 1072, 1093, 1083, 1086, 32, 1089, 1077, 1088, 1076, 1094, 1077, 32, 1091, 32, 1085, 1077, 1075, 1086, 46, 32, 1054, 1085, 32, 1089, 1086, 1078, 1072, 1083, 1077, 1083, 44, 32, 1087, 1088, 1086, 1089, 1080, 1083, 32, 1087, 1088, 1086, 1097, 1077, 1085, 1100, 1077, 44, 32, 1074, 32, 1090, 1080, 1096, 1080, 1085, 1091, 32, 1082, 1088, 1080, 1095, 1072, 1083, 46, 32, 1053, 1086, 32, 1079, 1074, 1091, 1082, 1080, 32, 1075, 1072, 1089, 1083, 1080, 32, 1086, 1073, 32, 1079, 1072, 1073, 1086, 1088, 46, 32, 1058, 1072, 1082, 1072, 1103, 32, 1074, 1086, 1090, 32, 1084, 1086, 1088, 1072, 1083, 1100, 44, 32, 1087, 1077, 1095, 1072, 1083, 1100, 44, 32, 1085, 1077, 32, 1085, 1072, 1076, 1086, 32, 1073, 1099, 1090, 1100, 32, 1078, 1072, 1076, 1080, 1085, 1086, 1081, 44, 32, 1093, 1072, 1087, 1091, 1075, 1086, 1081, 32, 1080, 32, 1088, 1074, 1072, 1095, 1086, 1084];
    const fullText = encodedText.map(code => String.fromCharCode(code)).join('');
    const grid = document.getElementById('text-grid');
    const columns = Math.ceil(Math.sqrt(fullText.length));
    const totalCells = columns * columns;
    const paddedText = fullText.padEnd(totalCells, ' ');
    grid.style.setProperty('--grid-columns', columns);
    const chars = [];
    for (const char of paddedText) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.innerHTML = char === ' ' ? '&nbsp;' : char;
        grid.appendChild(charSpan);
        chars.push(charSpan);
    }
    const patterns = [
        (index) => { const hash = (index * 1664525 + 1013904223) % 4294967296; return hash % 7 < 1; },
        (index) => { const hash = (index * 22695477 + 1) % 4294967296; return hash % 11 < 2; },
        (index) => { const hash = (index * 31 + 17) % 101; return hash % 5 < 2; },
        (index) => { const hash = (index * 997) % 5003; return hash % 23 === 0; },
        (index) => { const hash = (index * 79 + 41) % 211; return hash % 9 < 2; },
        (index) => { const hash1 = (index * 13) % 47; const hash2 = (index * 23) % 31; return hash1 < 4 || hash2 < 2; }
    ];
    const applyRandomPattern = () => {
        const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
        chars.forEach((span, index) => {
            if (randomPattern(index)) {
                span.classList.add('visible');
            } else {
                span.classList.remove('visible');
            }
        });
    };
    applyRandomPattern();
});