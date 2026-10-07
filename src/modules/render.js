import { currentWeather, weekWeather } from "./state.js";

const cardContainer = document.querySelector('.card-container');
const svgSunny = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"> <circle cx="32" cy="32" r="12" fill="#FDB813"/> <g stroke="#FDB813" stroke-width="4" stroke-linecap="round"> <line x1="32" y1="6" x2="32" y2="16"/> <line x1="32" y1="48" x2="32" y2="58"/> <line x1="6" y1="32" x2="16" y2="32"/> <line x1="48" y1="32" x2="58" y2="32"/> <line x1="13" y1="13" x2="20" y2="20"/> <line x1="44" y1="44" x2="51" y2="51"/> <line x1="44" y1="20" x2="51" y2="13"/> <line x1="13" y1="51" x2="20" y2="44"/> </g> </svg> `
const svgCloudy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"> <path d="M16 48h32a10 10 0 0 0 0-20 14 14 0 0 0-27-3A11 11 0 0 0 16 48z" fill="#BFC7D5"/></svg>`
const svgPartlyCloudy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"> <circle cx="22" cy="22" r="10" fill="#FDB813"/> <path d="M20 46h24a8 8 0 0 0 0-16 12 12 0 0 0-23-3A9 9 0 0 0 20 46z" fill="#D9E2EC"/></svg>`
const svgLightRain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"> <path d="M16 40h32a10 10 0 0 0 0-20 14 14 0 0 0-27-3A11 11 0 0 0 16 40z" fill="#BFC7D5"/><g stroke="#4A90E2" stroke-width="3" stroke-linecap="round"><line x1="24" y1="46" x2="22" y2="54"/><line x1="34" y1="46" x2="32" y2="54"/><line x1="44" y1="46" x2="42" y2="54"/></g></svg>`
const svgHeavyRain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"> <path d="M16 38h32a10 10 0 0 0 0-20 14 14 0 0 0-27-3A11 11 0 0 0 16 38z" fill="#9AA5B1"/><g stroke="#2F80ED" stroke-width="4" stroke-linecap="round"><line x1="22" y1="44" x2="19" y2="58"/><line x1="32" y1="44" x2="29" y2="58"/><line x1="42" y1="44" x2="39" y2="58"/><line x1="52" y1="44" x2="49" y2="58"/></g>`
const svgThunderstorm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><path d="M16 38h32a10 10 0 0 0 0-20 14 14 0 0 0-27-3A11 11 0 0 0 16 38z" fill="#7B8794"/><g stroke="#2F80ED" stroke-width="3" stroke-linecap="round"><line x1="22" y1="44" x2="20" y2="54"/><line x1="44" y1="44" x2="42" y2="54"/></g><path d="M35 40L28 51H34L30 60L42 47H36L40 40Z" fill="#FFD700"/></svg>`;

const icons = {
    "clear-day": svgSunny,
    "partly-cloudy-day": svgPartlyCloudy,
    cloudy: svgCloudy,
    "showers-day": svgLightRain,
    rain: svgHeavyRain,
    thunder: svgThunderstorm,
    "thunder-rain": svgThunderstorm,
    "thunder-showers-day": svgThunderstorm,
}

export function renderCards(){
    cardContainer.textContent = '';
    for(let i = 0; i < 7; i++){
        const card = document.createElement('div');
        const header = document.createElement('h4');
        const svgContainer = document.createElement('div');
        const min = document.createElement('p');
        const max = document.createElement('p');
        svgContainer.classList.add('svg-container');
        const icon = weekWeather[i].icon;
        svgContainer.innerHTML = icons[icon];
        card.classList.add('card');
        cardContainer.append(card);

        header.textContent = weekWeather[i].date;
        min.textContent = `Min: ${weekWeather[i].tempMin}`
        max.textContent = `Max: ${weekWeather[i].tempMax}`

        card.append(header, svgContainer, min, max)
    }

}

export function renderCurrent(){
    const mainHeader = document.querySelector('.main');
    const location = document.querySelector('.h5-location');
    const ctemp = document.querySelector('.h5-temp');
    const feels = document.querySelector('.h5-feels');
    const min = document.querySelector('.h5-min');
    const max = document.querySelector('.h5-max');

    mainHeader.textContent = currentWeather.address;
    location.textContent = `${currentWeather.address}`;
    ctemp.textContent = `Temp: ${currentWeather.temp}`;
    feels.textContent = `Feels Like: ${currentWeather.feelsLikeTemp}`;
    min.textContent = `Min Temp: ${currentWeather.tempMin}`; 
    max.textContent = `Max Temp: ${currentWeather.tempMax}`;
}