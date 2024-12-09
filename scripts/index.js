fetch('scripts/nearby-attractions.json')
.then(response => response.json())
.then(data => {
    const attractions = data;
    document.querySelectorAll(".attractions-list").forEach(element => {
        attractions.forEach(attraction => {
            const child = document.createElement("li");
            child.innerHTML = attraction.attraction;
            element.appendChild(child);
        });
    });
})
.catch(error => console.error('Error fetching the JSON file:', error));

function createEventSlide(event) {
    const li = document.createElement("li");
    li.className = "event-slide-container";

    const divSlide = document.createElement("div");
    divSlide.className = "event-slide mobile-collapse";

    const img = document.createElement("img");
    img.src = event.images[0];
    img.alt = "";

    const divDetails = document.createElement("div");
    divDetails.className = "event-details";

    const divTitle = document.createElement("div");
    divTitle.className = "event-title";

    const h2 = document.createElement("h2");
    h2.textContent = event.heading;

    const divDateCard = document.createElement("div");
    divDateCard.className = "date-card";

    const h6 = document.createElement("h6");
    h6.textContent = event.date.split(" ")[1];

    const h3 = document.createElement("h3");
    h3.textContent = event.date.split(" ")[2];

    const p = document.createElement("p");
    p.textContent = event.description;

    divDateCard.append(h6, h3);
    divTitle.append(h2, divDateCard);
    divDetails.append(divTitle, p);
    divSlide.append(img, divDetails);
    li.appendChild(divSlide);

    return li;
}

fetch('scripts/latest-events.json')
.then(response => response.json())
.then(data => {
    const events = data;
    for(let i=0; i<6; i++)
        document.querySelector("#event-list").appendChild(createEventSlide(events[i]));
})
.catch(error => console.error('Error fetching the JSON file:', error));



$(document).ready(function () {

    setTimeout(() => $(".owl-carousel").owlCarousel({ loop: true, autoplay: true, items: 1, center: true }), 300)

    const slideSRC = ["assets/index/slides/slide-1.webp", "assets/index/slides/slide-2.jpg"];
    const slideCount = slideSRC.length;
    let slideNumber = -1;
    const slideTime = 16000;

    function autoChangeSlide() {
        (slideNumber < slideCount - 1) ? slideNumber++ : slideNumber = 0;
        $("#slide-image-over").attr("src", slideSRC[slideNumber]);
        setTimeout(() => {
            $("#slide-image").attr("src", slideSRC[slideNumber])
        }, slideTime / 2);
    }
    autoChangeSlide();
    setInterval(autoChangeSlide, slideTime);
})