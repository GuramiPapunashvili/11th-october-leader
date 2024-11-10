const outputInfo = (cityOutput) =>{
    main.innerHTML = `
    <h1> ${cityOutput.name} </h1>
    <h2>${Math.floor(cityOutput.main.temp)}°C</h2>
    `
}

const myAPI = `fad57aa40e10efca42789250498639d2`
const myForm = document.querySelector('form')
const main = document.querySelector('main')
const cont = document.getElementsByClassName('container')

async function getEmoji(city){
    const fetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPI}&units=metric`);
    const cityInfo = await fetching.json();

    if (cityInfo.weather[0].main === 'Clear'){ //სხვა weather condition არ წერია, მარტო ესენია
        const img = document.createElement('img');
        img.src = "emojis/clear-sky.png";
        main.appendChild(img);
        img.style.height = '100px'
        img.style.width = '100px'
    } else if (cityInfo.weather[0].main === 'Clouds'){
        const img = document.createElement('img');
        img.src = "emojis/cloudy.png";
        main.appendChild(img);
        img.style.height = '100px'
        img.style.width = '100px'
    } else if (cityInfo.weather[0].main === 'Snow'){
        const img = document.createElement('img');
        img.src = "emojis/snow.png";
        main.appendChild(img);
        img.style.height = '100px'
        img.style.width = '100px'
    } else if (cityInfo.weather[0].main === 'Smoke'){
        const img = document.createElement('img');
        img.src = "emojis/foggy.png";
        main.appendChild(img);
        img.style.height = '100px'
        img.style.width = '100px'
    } else if(cityInfo.weather[0].main === 'Drizzle'){
        const img = document.createElement('img');
        img.src = "emojis/raining.png";
        main.appendChild(img);
        img.style.height = '100px'
        img.style.width = '100px'
    }
}

async function getWeather(city){
    try{
        const fetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPI}&units=metric`);
        const cityInfo = await fetching.json();
        console.log(cityInfo)
        return outputInfo(cityInfo)
    } catch(error){
        console.log(`Error: ${error}`)
    }
}


myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    getWeather(myForm.city.value);
    getEmoji(myForm.city.value);
})
