document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('button[data-translate="Save Field"]');
    const fieldListContainer = document.getElementById('field-list');

    const seedInitialData = () => {
        let fields = JSON.parse(localStorage.getItem('fields')) || [];
        const initialFields = [
            { name: 'North Field', acres: '2.5', location: 'North Field', color: 'green' },
            { name: 'South Field', acres: '3.2', location: 'South Field', color: 'yellow' },
            { name: 'East Field', acres: '1.8', location: 'East Field', color: 'blue' }
        ];

        let needsUpdate = false;
        initialFields.forEach(initialField => {
            if (!fields.some(field => field.name === initialField.name)) {
                fields.unshift(initialField);
                needsUpdate = true;
            }
        });

        if (needsUpdate) {
            localStorage.setItem('fields', JSON.stringify(fields));
        }
    };

    const renderFields = () => {
        const fields = JSON.parse(localStorage.getItem('fields')) || [];
        fieldListContainer.innerHTML = '';

        if (fields.length === 0) {
            fieldListContainer.innerHTML = '<p>No fields added yet.</p>';
            return;
        }

        const table = document.createElement('table');
        table.className = 'min-w-full divide-y divide-gray-200';
        const thead = document.createElement('thead');
        thead.className = 'bg-gray-50';
        thead.innerHTML = `
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Name</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acres</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        tbody.className = 'bg-white divide-y divide-gray-200';
        fields.forEach(field => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="h-4 w-4 rounded-full bg-${field.color}-500"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">${field.name}</td>
                <td class="px-6 py-4 whitespace-nowrap">${field.acres}</td>
                <td class="px-6 py-4 whitespace-nowrap">${field.location}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        fieldListContainer.appendChild(table);
    };

    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const fieldName = document.getElementById('field-name').value;
            const acres = document.getElementById('acres').value;
            const location = document.getElementById('location').value;

            if (fieldName && acres && location) {
                const field = {
                    name: fieldName,
                    acres: acres,
                    location: location,
                    color: 'gray' // Default color for new fields
                };

                let fields = JSON.parse(localStorage.getItem('fields')) || [];
                fields.push(field);
                localStorage.setItem('fields', JSON.stringify(fields));

                alert('Field saved successfully!');

                document.getElementById('field-name').value = '';
                document.getElementById('acres').value = '';
                document.getElementById('location').value = '';

                renderFields();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    seedInitialData();
    renderFields();
});
