const url = 'https://luroblesf.github.io/wdd231/project/data/places.json';
const cards = document.querySelector('#cards');
const modal = document.getElementById('placeModal');

async function getPlacesData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPlaces(data.places);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getPlacesData();

const displayPlaces = (places) => {
    places.forEach(place => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let schedule = document.createElement('p');
        let services = document.createElement('p');
        let phone = document.createElement('p');
        let button = document.createElement('button');

        name.textContent = place.name;
        address.textContent = place.address;
        phone.textContent = place.phone;

        portrait.setAttribute('src', place.imageurl);
        portrait.setAttribute('alt', `Portrait of ${place.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '200');

        button.textContent = 'More Information';
        button.classList.add('infoBtn');
        const combinedDetails = `<strong>Schedule:</strong> ${place.schedule}\n<strong>Services:</strong> ${place.services}`;
        button.setAttribute('data-details', encodeURIComponent(combinedDetails));

        button.addEventListener('click', () => {
            const details = decodeURIComponent(button.dataset.details);
            modal.innerHTML = `
                <h2>Information</h2>
                <p>${details.replace(/\n/g, '<br>')}</p>
                <button id="closeButton">X</button>
            `;
            modal.showModal();
            modal.querySelector('#closeButton').addEventListener('click', () => modal.close());
        });

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(schedule);
        card.appendChild(services);
        card.appendChild(phone);
        card.appendChild(portrait);
        card.appendChild(button);

        cards.appendChild(card);
    });
};
