let events;

const renderSection = (event) => {
    const section = document.createElement("section");
    const container = document.createElement("div");

    const date = document.createElement("h5");
    const head = document.createElement("h2");
    const body = document.createElement("div");
    const carousal = document.createElement("div");
    const content = document.createElement("p");

    container.className = "container";
    body.classList.add("body", "mobile-collapse");
    carousal.classList.add("carousal", "owl-carousel");
    content.className = "content";

    event.images.forEach((imgUrl) => {
        const img = document.createElement("img");
        img.src = imgUrl;
        carousal.appendChild(img);
    });
    
    date.textContent = event.date;
    head.textContent = event.heading;
    content.innerHTML = event.description;
    
    body.append(carousal, content);
    container.append(date, head, body);
    section.appendChild(container);

    return section;
};

fetch('scripts/latest-events.json')
    .then(response => response.json())
    .then(data => {
        events = data;
        events.forEach((event) => {
            const section = renderSection(event);
            document.querySelector("#main").appendChild(section);
            $(section).find(".owl-carousel").owlCarousel({ loop: true, autoplay: true, items: 1 });
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));