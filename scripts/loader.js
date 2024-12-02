const loaderContainer = document.createElement("div")
loaderContainer.className = "loader-container"
const loader = document.createElement("div");
loader.className = "loader";
const spinner = document.createElement("div");
spinner.className = "spinner";
loader.appendChild(spinner)
loaderContainer.appendChild(loader)
document.querySelector("body").prepend(loaderContainer)

document.addEventListener("DOMContentLoaded", function() {
    loaderContainer.style.animation = "fade-out .5s .5s linear";

    setTimeout(function() {
        loaderContainer.style.display = "none";
    }, 1000);
});
