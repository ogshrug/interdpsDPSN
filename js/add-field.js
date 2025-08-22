document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('button[data-translate="Save Field"]');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const fieldName = document.getElementById('field-name').value;
            const acres = document.getElementById('acres').value;
            const location = document.getElementById('location').value;

            if (fieldName && acres && location) {
                const field = {
                    name: fieldName,
                    acres: acres,
                    location: location
                };

                let fields = JSON.parse(localStorage.getItem('fields')) || [];
                fields.push(field);
                localStorage.setItem('fields', JSON.stringify(fields));

                alert('Field saved successfully!');

                document.getElementById('field-name').value = '';
                document.getElementById('acres').value = '';
                document.getElementById('location').value = '';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
