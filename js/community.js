document.addEventListener('DOMContentLoaded', function() {
    const postInput = document.getElementById('community-post-input');
    const postButton = document.getElementById('community-post-button');
    const postsContainer = document.getElementById('community-posts');

    postButton.addEventListener('click', function() {
        const postText = postInput.value.trim();
        if (postText) {
            addPost(postText);
            postInput.value = '';
        }
    });

    function addPost(text, isDummy = false) {
        const postElement = document.createElement('div');
        postElement.className = 'bg-gray-50 p-4 rounded-lg';

        const postText = document.createElement('p');
        postText.className = 'text-gray-800';
        postText.textContent = text;
        postElement.appendChild(postText);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'mt-2 space-x-2';

        const pestButton = document.createElement('button');
        pestButton.className = 'bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs font-medium';
        pestButton.textContent = 'Pest Advice';
        pestButton.setAttribute('data-translate', 'Pest Advice');

        const farmingButton = document.createElement('button');
        farmingButton.className = 'bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium';
        farmingButton.textContent = 'Farming Advice';
        farmingButton.setAttribute('data-translate', 'Farming Advice');

        buttonContainer.appendChild(pestButton);
        buttonContainer.appendChild(farmingButton);
        postElement.appendChild(buttonContainer);

        postsContainer.prepend(postElement);
    }

    // Add a dummy post
    addPost("Has anyone else seen signs of stem rust in their wheat crops? I'm noticing yellow spots and it's spreading fast. Any advice on how to control it?", true);
});
