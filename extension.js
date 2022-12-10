function callApi() {
    fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => {
            // Update the HTML of the page
            document.getElementById('my-element').innerHTML = data.message;
    });
}
