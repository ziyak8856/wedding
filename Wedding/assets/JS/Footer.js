document.addEventListener("DOMContentLoaded", function () {
    // Adjust path dynamically based on the current location
    const pathToFooter = window.location.pathname.includes("pages") ? "../components/Footer.html" : "./assets/components/Footer.html";

    fetch(pathToFooter)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load Footer.html: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
