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
                <h2>${item.name}</h2>
                <img src='${item.imageurl}' alt='Image of ${item.name}'>
                <p>${item.address}</p>
                <p>${item.description}</p>
                <button class='infoBtn' data-name='${encodeURIComponent(item.name)}' data-details='${encodeURIComponent(item.details)}' data-image='${encodeURIComponent(item.imageurl)}'>Learn More</button>
            `;
            dataElement.appendChild(container);
        });

        const modal = document.getElementById('placeModal');
        const modalImage = modal.querySelector('.modal-image');
        const modalTitle = modal.querySelector('#modalTitle');
        const modalAddress = modal.querySelector('.modal-address');
        const modalDescription = modal.querySelector('.modal-details');
        const modalClose = modal.querySelector('#closeButton');

        function openModal(data) {
            modalImage.src = data.image;
            modalImage.alt = `Image of ${data.name}`;
            modalTitle.textContent = data.name;
            modalAddress.textContent = data.address;
            modalDescription.textContent = data.details;
            if (typeof modal.showModal === 'function') {
                modal.showModal();
            } else {
                modal.setAttribute('open', '');
            }
        }

        function closeModal() {
            if (typeof modal.close === 'function') {
                modal.close();
            } else {
                modal.removeAttribute('open');
            }
        }
        document.querySelectorAll('.infoBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const data = {
                    name: decodeURIComponent(btn.dataset.name),
                    address: decodeURIComponent(btn.dataset.address),
                    description: decodeURIComponent(btn.dataset.description),
                    image: decodeURIComponent(btn.dataset.image),
                };
                openModal(data);
            });
        });


        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom
            );
            if (!isInDialog) {
                closeModal();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

displayPlaces();





