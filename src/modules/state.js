const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Milwaukee?key=5FKESTJ3CMMMYX5HEWAEHG9WJ'
const key = '5FKESTJ3CMMMYX5HEWAEHG9WJ';

export let currentWeather = {};
export let weekWeather = [];


export async function getData() {
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
    console.log('currentWeather', currentWeather)
    console.log('weekWeather array', weekWeather);
}






