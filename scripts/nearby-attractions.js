let attractions;

const renderCard = (attraction) => {
        const card = document.createElement('div');
        card.className = 'card';
    
        const img = document.createElement('img');
        img.src = attraction.image;
        img.alt = '';
    
        const innerDiv = document.createElement('div');
        const h2 = document.createElement('h3');
        const h6 = document.createElement('h6');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        h5.textContent = attraction.distance;
        h2.textContent = attraction.attraction;
        h6.textContent = attraction.location;
        p.textContent = attraction.description;
        innerDiv.append(h5, h2, h6, p);
        card.append(img, innerDiv);

        return card;
}

fetch('scripts/nearby-attractions.json')
.then(response => response.json())
.then(data => {
    attractions = data;
    document.querySelector("#search-results-count").innerText = (attractions.length);
        attractions.forEach((attraction) => {
            document.querySelector("#card-board").appendChild(renderCard(attraction));
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));