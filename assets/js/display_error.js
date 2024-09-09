// Function to display the error message on the HTML page
function displayErrorMessage() {
    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    // Check if there's an "error" parameter
    if (params.has('error')) {
        // Get the "error" parameter value
        let errorMessage = params.get('error');

        // Replace all '+' with space
        errorMessage = errorMessage.replace(/\+/g, ' ');

        // Display the error message in the HTML element with ID 'error-message'
        const errorElement = document.getElementById('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.hidden = false;
        } else {
            console.warn('No element found with ID "error"');
        }
    }
}

// Call the function when the page loads
window.onload = displayErrorMessage;