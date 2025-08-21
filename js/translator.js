document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-dropdown button');
    const languageDisplay = document.querySelector('.language-selector span');

    const setLanguage = (lang) => {
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        if (languageDisplay) {
            const languageMap = {
                'en': 'English',
                'hi': 'हिंदी',
                'bn': 'বাংলা',
                'ta': 'தமிழ்',
                'te': 'తెలుగు',
                'mr': 'मराठी',
                'ur': 'اردو',
                'gu': 'ગુજરાતી',
                'kn': 'ಕನ್ನಡ',
                'ml': 'മലയാളം',
                'or': 'ଓଡ଼ିଆ',
                'pa': 'ਪੰਜਾਬੀ',
                'as': 'অসমীয়া',
                'mai': 'मैथिली',
                'sat': 'संथाली',
                'ks': 'कश्मीरी',
                'ne': 'नेपाली',
                'kok': 'कोंकणी',
                'mni': 'मणिपुरी',
                'brx': 'बोडो',
                'doi': 'डोगरी',
                'sd': 'सिंधी',
                'sa': 'संस्कृत'
            };
            languageDisplay.textContent = languageMap[lang] || 'English';
        }
        localStorage.setItem('language', lang);
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown) {
            dropdown.classList.add('hidden');
        }
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLanguage = this.getAttribute('data-lang');
            setLanguage(selectedLanguage);
        });
    });

    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Toggle dropdown
    const languageSelectorButton = document.querySelector('.language-selector > button');
    if (languageSelectorButton) {
        languageSelectorButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const dropdown = document.querySelector('.language-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    }

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        const dropdown = document.querySelector('.language-dropdown');
        const selector = document.querySelector('.language-selector');
        if (dropdown && selector && !selector.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
});
