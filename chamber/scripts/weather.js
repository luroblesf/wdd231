const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "ac8e4c355ed74d3cd6b98de7eb770880";
const myLat = 14.64;
const myLon = -90.51;

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {

    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    const celsius = ((data.main.temp - 32) * 5 / 9).toFixed(2);
    myTemperature.innerHTML = `${celsius}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();

const apiKey = "ac8e4c355ed74d3cd6b98de7eb770880";
const city = "Guatemala City";

const fetchWeather = async () => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        const groupedByDay = {};
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dayKey = date.toLocaleDateString('en-US', { weekday: 'long' });

            if (!groupedByDay[dayKey]) {
                groupedByDay[dayKey] = [];
            }
            groupedByDay[dayKey].push(item);
        });

         const nextThreeDays = Object.values(groupedByDay)
            .slice(1, 4)
            .map(dayGroup => {
                return dayGroup.find(item => {
                    const hour = new Date(item.dt * 1000).getHours();
                    return hour === 12; 
                }) || dayGroup[Math.floor(dayGroup.length / 2)];
            });

        displayWeather(nextThreeDays);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

const displayWeather = (days) => {
    const weatherList = document.getElementById('weather-list');
    weatherList.innerHTML = '';

    days.forEach(day => {
        const listItem = document.createElement('li');
        listItem.className = 'weather-item';

        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = day.main.temp;
        const description = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
     
        const dayElement = document.createElement('div');
        dayElement.className = 'day-name';
        dayElement.textContent = dayName;

        const tempElement = document.createElement('div');
        tempElement.className = 'temperature';
        tempElement.textContent = `Temperature: ${temp}°C`;

        const descElement = document.createElement('div');
        descElement.className = 'description';
        descElement.textContent = `Description: ${description}`;

        const iconElement = document.createElement('img');
        iconElement.className = 'weather-icon';
        iconElement.src = iconUrl;
        iconElement.alt = description;

        listItem.appendChild(iconElement);
        listItem.appendChild(dayElement);
        listItem.appendChild(tempElement);
        listItem.appendChild(descElement);

        weatherList.appendChild(listItem);
    });
};

fetchWeather();