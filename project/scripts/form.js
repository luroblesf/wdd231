const places = [
    {
        id: "A1001",
        name: "Guatemala City",
    },
    {
        id: " A1002",
        name: "Quetzaltenango City",
    },
    {
        id: " A1003",
        name: "Chiquimula City",
    },
    {
        id: " A1004",
        name: "Peten City",
    },
    {
        id: " A1005",
        name: "El Progreso City",
    },
    {
        id: " A1006",
        name: "Totonicapan City",
    },
    {
        id: " A1007",
        name: "Retalhuleu City",
    },
    {
        id: " A1008",
        name: "San Marcos City",
    },
    {
        id: " A1009",
        name: "Alta Verapaz City",
    },
    {
        id: " A1010",
        name: "Mazatenango City",
    },
    {
        id: " A1011",
        name: "Chimaltenango City",
    },
    {
        id: " A1012",
        name: "Escuintla City",
    },
    {
        id: " A1013",
        name: "Santa Rosa City",
    },
    {
        id: " A1014",
        name: "Jalapa City",
    },
    {
        id: " A1015",
        name: "Jutiapa City",
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const placeSelect = document.querySelector('select[name="location"]');
    places.forEach(place => {
        const option = document.createElement('option');
        option.value = place.id;
        option.textContent = place.name;
        placeSelect.appendChild(option);
    });

    const form = document.querySelector('form.wf');
    form.addEventListener('submit', function (event) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    });

});

function submitForm() {
    let namec = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let location = document.getElementById('location').value;
    let option = document.querySelector('input[name="services"]:checked').value;

    localStorage.setItem('name', namec);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('location', location);
    localStorage.setItem('option', option);

    window.location.href = 'thankyou.html';
}

let namec = localStorage.getItem('name');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let option = localStorage.getItem('option');
let message = localStorage.getItem('message');

document.getElementById('displayName').textContent = namec;
document.getElementById('displayPhone').textContent = phone;
document.getElementById('displayEmail').textContent = email;

const locationId = localStorage.getItem('location');
const selectedPlace = places.find(p => p.id.trim() === locationId.trim());
document.getElementById('displayLocation').textContent = selectedPlace ? selectedPlace.name : 'Unknown Location';
document.getElementById('displayService').textContent = option;
document.getElementById('displayMessage').textContent = message;


function showNumberVisits() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById("reviewCount").textContent = reviewCount;
}

window.onload = showNumberVisits;
