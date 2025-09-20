const url = "https://luroblesf.github.io/wdd231/chamber/data/places.json";
const greeting = document.getElementById('greeting-msg');
const daysSeconds = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = new Date().getTime();

function displayGreeting() {
    if (greeting) {
        if (!lastVisit) {
            greeting.textContent = 'Welcome! Let us know if you have questions.';
        } else {
            const timeDiff = currentVisit - parseInt(lastVisit);
            const daysDiff = Math.floor(timeDiff / daysSeconds);

            if (timeDiff < daysSeconds) {
                greeting.textContent = 'Back so soon! Awesome!';
            } else {
                const daysText = daysDiff === 1 ? 'day' : 'days';
                greeting.textContent = `You last visited ${daysDiff} ${daysText}`;
            }
        }

        localStorage.setItem('lastVisit', currentVisit);
        setTimeout(() => {
            greeting.classList.add('hidden');
        }, 10000);
    }
}

displayGreeting();

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
                <img src='images/${item.imageurl}' alt='Image of ${item.name}'>
                <h2>${item.name}</h2>
                <p>${item.address}</p>
                <p>${item.description}</p>
                <button type='submit'>Learn More</button>
            `;
            dataElement.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

displayPlaces();



