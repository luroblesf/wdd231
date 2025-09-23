const cards = document.querySelector('#cards');
const url = 'https://luroblesf.github.io/wdd231/project/data/places.json'

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
        let schedule = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${places.name}`;
        schedule.textContent = `Schedule: ${places.schedule}`;
        phone.textContent = `Phone Number: ${places.phone}`;

        portrait.setAttribute('src', places.imageurl);
        portrait.setAttribute('alt', `Portrait of ${places.name} ${places.schedule} - ${places.phone}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(schedule);
        card.appendChild(phone);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}