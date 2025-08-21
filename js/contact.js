document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const submissionAnimation = document.getElementById('form-submission-animation');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide the form
        contactForm.classList.add('hidden');

        // Show the submission animation
        submissionAnimation.classList.remove('hidden');
        submissionAnimation.classList.add('animate');

        const lang = localStorage.getItem('language') || 'en';
        const message = translations[lang]['Thank you! Your message has been sent.'] || 'Thank you! Your message has been sent.';
        submissionAnimation.querySelector('p').textContent = message;

        // You can add an AJAX call here to actually submit the form data
        // For now, we'll just reset the form and show it again after a delay
        setTimeout(() => {
            // Reset the form
            contactForm.reset();

            // Hide the animation and show the form again
            submissionAnimation.classList.add('hidden');
            submissionAnimation.classList.remove('animate');
            contactForm.classList.remove('hidden');
        }, 4000);
    });
});
