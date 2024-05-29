document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registration-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const genderInputs = document.getElementsByName('gender');
    const checkbox = document.getElementById('accept-rules');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        document.querySelectorAll('.error-message').forEach(errorElement => {
            errorElement.style.display = 'none';
        });

        if (!firstNameInput.value.trim()) {
            showError('first-name-error', 'First name must be filled');
            valid = false;
        } else if (firstNameInput.value.trim().length < 5) {
            showError('first-name-error', 'First name must be at least 5 characters');
            valid = false;
        }

        if (!lastNameInput.value.trim()) {
            showError('last-name-error', 'Last name must be filled');
            valid = false;
        } else if (lastNameInput.value.trim().length < 5) {
            showError('last-name-error', 'Last name must be at least 5 characters');
            valid = false;
        }

        if (!emailInput.value.trim()) {
            showError('email-error', 'Email must be filled');
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError('email-error', 'Email must end with @zenzen.com');
            valid = false;
        }

        if (!addressInput.value.trim()) {
            showError('address-error', 'Address must be filled');
            valid = false;
        } else if (addressInput.value.trim().length < 5) {
            showError('address-error', 'Address must be at least 5 characters');
            valid = false;
        }

        if (![...genderInputs].some(genderInput => genderInput.checked)) {
            showError('gender-error', 'You must select a gender');
            valid = false;
        }

        if (!checkbox.checked) {
            showError('accept-rules-error', 'You must accept the rules');
            valid = false;
        }

        if (valid) {
            alert('success');
            form.submit();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function validateEmail(email) {
        const pattern = /^[^ ]+@zenzen\.com$/;
        return pattern.test(email);
    }
});
