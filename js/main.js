// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform transition-transform duration-300 ease-in-out translate-x-full';
    mobileMenu.innerHTML = `
        <div class="bg-white h-full w-3/4 ml-auto p-6">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-xl font-bold">Menu</h2>
                <button class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav class="flex flex-col space-y-4">
                <a href="#" class="text-gray-700 font-medium py-2 border-b border-gray-100">Dashboard</a>
                <a href="soil-analysis.html" class="text-gray-700 font-medium py-2 border-b border-gray-100">Soil Analysis</a>
                <a href="weather.html" class="text-gray-700 font-medium py-2 border-b border-gray-100">Weather</a>
                <a href="crop-suggestions.html" class="text-gray-700 font-medium py-2 border-b border-gray-100">Crop Suggestions</a>
                <a href="market-prices.html" class="text-gray-700 font-medium py-2 border-b border-gray-100">Market Prices</a>
            </nav>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('translate-x-full');
    });

    const closeButton = mobileMenu.querySelector('button');
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
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
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLanguage = this.textContent.split(' ')[0];
            languageDisplay.textContent = selectedLanguage;
            // Here you would add code to change the application language
            // For now, we'll just close the dropdown
            document.querySelector('.language-dropdown').classList.add('hidden');
        });
    });
});