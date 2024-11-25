document.addEventListener("DOMContentLoaded", function () {
    // Adjust path dynamically based on the current location
    const pathToNavBar = window.location.pathname.includes("pages") ? "../components/NavBar.html" : "./assets/components/NavBar.html";

    fetch(pathToNavBar)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load NavBar.html: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});
