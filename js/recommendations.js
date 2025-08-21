document.addEventListener('DOMContentLoaded', function() {
    const fieldSelector = document.getElementById('field-selector');
    const recommendationsContainer = document.getElementById('recommendations-container');

    function renderRecommendations(fieldId) {
        const lang = localStorage.getItem('language') || 'en';
        API.getCropSuggestions(fieldId).then(suggestions => {
            recommendationsContainer.innerHTML = ''; // Clear existing cards
            if (suggestions.error) {
                recommendationsContainer.innerHTML = `<p class="text-red-500">${suggestions.error}</p>`;
                return;
            }
            suggestions.forEach(suggestion => {
                const crop = translations[lang][suggestion.cropKey] || suggestion.cropKey;
                const variety = translations[lang][suggestion.varietyKey] || suggestion.varietyKey;
                const expectedYield = translations[lang][suggestion.expectedYieldKey] || suggestion.expectedYieldKey;
                const waterRequirement = translations[lang][suggestion.waterRequirementKey] || suggestion.waterRequirementKey;
                const growingPeriod = translations[lang][suggestion.growingPeriodKey] || suggestion.growingPeriodKey;

                const card = `
                    <div class="border border-gray-200 rounded-lg overflow-hidden">
                        <div class="bg-green-50 px-4 py-3 border-b border-gray-200">
                            <div class="flex justify-between items-center">
                                <h3 class="font-semibold text-lg">${crop} (${variety})</h3>
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${suggestion.suitability}% Suitable</span>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Expected Yield">Expected Yield</p>
                                    <p class="font-medium">${expectedYield}</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Water Requirement">Water Requirement</p>
                                    <p class="font-medium">${waterRequirement}</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Growing Period">Growing Period</p>
                                    <p class="font-medium">${growingPeriod}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                recommendationsContainer.insertAdjacentHTML('beforeend', card);
            });
        });
    }

    // Initial load
    renderRecommendations(fieldSelector.value);

    // Update on change
    fieldSelector.addEventListener('change', function() {
        renderRecommendations(this.value);
    });
});
