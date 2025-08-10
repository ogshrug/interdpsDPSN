document.addEventListener('DOMContentLoaded', function() {
    const fieldSelector = document.getElementById('field-selector');
    const recommendationsContainer = document.getElementById('recommendations-container');

    function renderRecommendations(fieldId) {
        API.getCropSuggestions(fieldId).then(suggestions => {
            recommendationsContainer.innerHTML = ''; // Clear existing cards
            if (suggestions.error) {
                recommendationsContainer.innerHTML = `<p class="text-red-500">${suggestions.error}</p>`;
                return;
            }
            suggestions.forEach(suggestion => {
                const card = `
                    <div class="border border-gray-200 rounded-lg overflow-hidden">
                        <div class="bg-green-50 px-4 py-3 border-b border-gray-200">
                            <div class="flex justify-between items-center">
                                <h3 class="font-semibold text-lg">${suggestion.crop} (${suggestion.variety})</h3>
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${suggestion.suitability}% Suitable</span>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Expected Yield">Expected Yield</p>
                                    <p class="font-medium">${suggestion.expectedYield}</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Water Requirement">Water Requirement</p>
                                    <p class="font-medium">${suggestion.waterRequirement}</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 mb-1" data-translate="Growing Period">Growing Period</p>
                                    <p class="font-medium">${suggestion.growingPeriod}</p>
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
