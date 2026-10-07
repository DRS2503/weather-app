import { renderCurrent, renderCards } from "./render.js";

let place = 'Milwaukee';
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=5FKESTJ3CMMMYX5HEWAEHG9WJ`
const key = '5FKESTJ3CMMMYX5HEWAEHG9WJ';

export let currentWeather = {};
export let weekWeather = [];

export function setPlace(p){
    place = p;
    url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=5FKESTJ3CMMMYX5HEWAEHG9WJ`
    getData();
}

export async function getData() {
    try{
        const response = await fetch(url);
        let data = await response.json();
    
        if (data != '') {
            currentWeather = {
                address: data.address,
                temp: data.currentConditions.temp,
                feelsLikeTemp: data.currentConditions.feelslike,
                icon: data.currentConditions.icon,
                tempMin: data.days[0].tempmin,
                tempMax: data.days[0].tempmax
            }
            
            for (let i = 0; i < 7; i++) {
                let weekDayData = data.days[i];
                const date = new Date(weekDayData.datetime);
                const weekDay = date.toLocaleDateString('en-US', { weekday: "long", timeZone: 'UTC' });
                let dailyWeather = {
                    date: weekDay,
                    tempMin: weekDayData.tempmin,
                    tempMax: weekDayData.tempmax,
                    icon: weekDayData.icon
                };
                weekWeather[i] = dailyWeather;
            }
        }

    }catch{

    }
    renderCurrent();
    renderCards();
}






