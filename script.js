// let input = document.querySelector('.input').value;
let btn = document.querySelector('.btn');
let temp = document.querySelector('.temp');
let mainbox = document.querySelector('.container-fluid');


async function fetchData() {
    let cityname = document.querySelector('#inputcity').value;
    let today = new Date();
    let currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let name = document.querySelector('.name');
    let temperature = document.getElementById('temperature');
    let tempmin = document.getElementById('tempmin');
    let tempmax = document.getElementById('tempmax');
    let description = document.getElementById('description');
    let humidity = document.getElementById('humidiey');
    let pressure = document.getElementById('pressure');
    let countryName = document.getElementById('countryName');
    let windSpeed = document.getElementById('windSpeed');
    let windGust = document.getElementById('windgust');
    let time = document.getElementById('time');
    let icon = document.getElementById('icon');
    let def = "Jabalpur";
    let cloud = document.querySelector('.fa-solid');

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname || def}&appid=37941ef580eff211a7045e9c1d28414d`).then(res => res.json()).then(d => {


        name.innerHTML = d.name;
        temperature.innerHTML = parseInt(d.main.temp - (273.15)) + "&#8451";
        tempmin.innerHTML = ` Min Temp ${parseInt(d.main.temp_min - (273.15))} &#8451`;
        tempmax.innerHTML = `Max Temp ${parseInt(d.main.temp_max - (273.15))}  &#8451`;
        description.innerHTML = d.weather[0].description;
        humidity.innerHTML = d.main.humidity + " AH"
        pressure.innerHTML = d.main.pressure + " ATM";
        countryName.innerHTML = d.sys.country;
        windSpeed.innerHTML = d.wind.speed + " KMPH";
        windGust.innerHTML = d.wind.gust+ " KMPH";
        time.innerHTML = currTime;
        lon = d.coord.lon;
        lat = d.coord.lat;
        if (description.innerText === 'clear sky') {
            icon.innerHTML = `<i class="fa-solid fa-sun"></i>`
            mainbox.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')"
        } else if (description.innerText === 'haze') {
            icon.innerHTML = `<i class="fa-solid fa-smog"></i>`
        }
        else if (description.innerText === 'scattered clouds') {
            icon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
            mainbox.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvfQKkMhoLydcHSCOfsvLTurZ9Bg8topwCQ&usqp=CAU')"


        }
        else if (description.innerText === 'overcast clouds') {
            icon.innerHTML = `<i class="fa-solid fa-cloud overcast"></i>`
            mainbox.style.backgroundImage = "url('https://www.thoughtco.com/thmb/J3Rgj51HG6lQKDL8k-PJgtdf2bI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-528903279-599d1549aad52b001107054d.jpg')"


        } else if (description.innerText === 'mist') {
            icon.innerHTML = `<i class="fa-solid fa-smog"></i>`
            mainbox.style.backgroundImage = "url('https://s.w-x.co/util/image/w/in-Fog_delhi1.jpg?v=at&w=1280&h=720')"
        } else {
            icon.innerHTML = `<i class="fa-solid fa-cloud"></i>`
            mainbox.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')"
        }
    })



}

fetchData()