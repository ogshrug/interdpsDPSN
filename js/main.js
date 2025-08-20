// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.createElement('button');

    closeButton.className = 'absolute top-4 right-4 text-gray-500 hover:text-gray-700 md:hidden';
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
    mobileMenu.appendChild(closeButton);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('menu-open');
    });

    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('menu-open');
    });
});

// Alert dismissal
document.addEventListener('DOMContentLoaded', function() {
    const alertCloseButton = document.querySelector('.alert-critical button');
    const alertBanner = document.querySelector('.alert-critical');
    
    if (alertCloseButton && alertBanner) {
        alertCloseButton.addEventListener('click', function() {
            alertBanner.style.display = 'none';
        });
    }
});

// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-dropdown button');
    const languageDisplay = document.querySelector('.language-selector span');

    function setLanguage(lang) {
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        if (languageDisplay) {
            languageDisplay.textContent = lang === 'hi' ? 'हिंदी' : 'English';
        }
        document.querySelector('.language-dropdown').classList.add('hidden');
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLanguage = this.getAttribute('data-lang');
            setLanguage(selectedLanguage);
        });
    });

    // Set initial language
    setLanguage('en');
});