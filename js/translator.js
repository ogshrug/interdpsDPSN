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
                'hi': 'हिंदी'
            };
            languageDisplay.textContent = languageMap[lang] || 'English';
        }
        localStorage.setItem('language', lang);
        document.body.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: lang } }));
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
    const languageSelectorButtons = document.querySelectorAll('.language-selector > button');
    if (languageSelectorButtons) {
        languageSelectorButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const dropdown = button.nextElementSibling;
                if (dropdown) {
                    dropdown.classList.toggle('hidden');
                }
            });
        });
    }

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        const dropdowns = document.querySelectorAll('.language-dropdown');
        const selectors = document.querySelectorAll('.language-selector');

        let clickInside = false;
        selectors.forEach(selector => {
            if (selector.contains(event.target)) {
                clickInside = true;
            }
        });

        if (!clickInside) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
});
