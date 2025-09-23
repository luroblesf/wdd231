const url = 'https://luroblesf.github.io/wdd231/project/data/places.json';
const cards = document.querySelector('#cards');

async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data.places);
}

getPlacesData();

const displayPlaces = (places) => {
    places.forEach(place => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let schedule = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${place.name}`;
        address.textContent = `${ place.address}`;
        schedule.textContent = `Schedule: ${place.schedule}`;
        phone.textContent = `Phone Number: ${place.phone}`;

        portrait.setAttribute('src', place.imageurl);
        portrait.setAttribute('alt', `Portrait of ${place.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(schedule);
        card.appendChild(phone);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}