document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.github.com/users/annaeliava/repos")
        .then((response) => response.json())
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                document.getElementById("container").innerHTML += `<div class="item">
                <h2><a href="${response[i].html_url}">${response[i].name}</a></h2>
                </div>`;
            }
        })
        .catch((err) => alert(err));
});