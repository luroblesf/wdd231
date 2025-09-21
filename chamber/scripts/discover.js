const url = "https://luroblesf.github.io/wdd231/chamber/data/places.json";

async function displayPlaces() {
    const dataElement = document.querySelector('.discover-info');

    try {
        const response = await fetch('data/places.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        data.places.forEach(item => {
            const container = document.createElement('div');
            container.classList.add('activity');

            container.innerHTML = `
                <h2>${item.name}</h2>
                <img src='${item.imageurl}' alt='Image of ${item.name}'>
                <h3>${item.address}</h3>
                <p>${item.description}</p>
                <button class='infoBtn' data-details='${encodeURIComponent(item.details)}'>Learn More</button>
            `;
            dataElement.appendChild(container);
        });

        const modal = document.getElementById('placeModal');

        document.querySelectorAll('.infoBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const details = decodeURIComponent(btn.dataset.details);
                modal.innerHTML = `
                    <p>${details}</p>
                    <button id="closeButton">❌</button>
                `;
                modal.showModal();
                modal.querySelector('#closeButton').addEventListener('click', () => modal.close());
            });
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

displayPlaces();
        
        



