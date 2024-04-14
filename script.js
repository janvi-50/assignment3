// Function to handle radio button selection
function handleAccountTypeSelection() {
    const selectedAccountType = document.querySelector('input[name="account-type"]:checked').value;
    // Add logic based on the selected account type
}

// Function to display a message when terms are accepted
function displayTermsMessage() {
    if (document.querySelector('input[name="terms"]').checked) {
        alert('Thank you for accepting the terms and conditions!');
    }
}

// Function to handle profile picture upload
function handleProfilePictureUpload() {
    const file = document.querySelector('input[name="file"]').files[0];
    // Add logic to handle the uploaded file
}

// Function to get the selected referrer option
function getReferrerOption() {
    const referrerSelect = document.querySelector('select[name="referrer"]');
    const selectedOption = referrerSelect.options[referrerSelect.selectedIndex].text;
    // Add logic based on the selected referrer option
}

// Function to reset the form
function resetForm() {
    document.querySelector('form').reset();
}

// Event listeners for different form interactions
document.querySelectorAll('input[name="account-type"]').forEach(radio => radio.addEventListener('change', handleAccountTypeSelection));
document.querySelector('input[name="terms"]').addEventListener('change', displayTermsMessage);
document.querySelector('input[name="file"]').addEventListener('change', handleProfilePictureUpload);
document.querySelector('select[name="referrer"]').addEventListener('change', getReferrerOption);
document.querySelector('button[type="reset"]').addEventListener('click', resetForm);

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show a thank you message
    alert("Thank you, your form is submitted");

    // Reset the form
    resetForm();
}