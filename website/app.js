// OpenWeatherMap credentials
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = ',us&appid=3fdaddc8476ec856adc0078f023adbd7';
//let zip = '04468';
let entryId = 1;

//POST data to local server
const postData = async (url = '', data = {})=>{
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch(error) {
    console.log("error", error);
    alert("Cannot post to server");
  }
}

//GET data from the local server
const getData = async (url='')=>{
  const req = await fetch(url);
  try {
    const fullData = await req.json();
    console.log(fullData);

    document.getElementById('date').innerHTML = fullData[0].date;
    document.getElementById('temp').innerHTML = "Temperature: " + fullData[0].temp;
    document.getElementById('weather').innerHTML = "Weather: " + fullData[0].weather;
    document.getElementById('thoughts').innerHTML = "Feelings: " + fullData[0].feeling;

  } catch(error) {
    console.log("error", error);
    alert("Cannot connect to server");
  }
}

//update the UI - need to have get and post functions first
const generate = document.getElementById('generate');
generate.addEventListener('click', updateJournal);

function updateJournal() {
  const zipCode = document.getElementById('zip').value;
  const feeling = document.getElementById('feeling').value;
  const date = new Date();
  const dateString = date.toDateString();
  //get weather from web api using input zip code
  getWeather(baseURL, zipCode, apiKey,)
  .then(function(data) {
    const req = {
      date: dateString,
      temp: data.main.temp,
      weather: data.weather[0].main,
      feelings: feeling,
      entry: entryId,
    };
    entryId += 1;
    postData('/add', req);

  })
  .then(getData('/all'))
}

const getWeather = async (webURL, zip, key)=>{
  const res = await fetch(webURL+zip+key);
  try {
    const data = await res.json();
    return data;
  } catch(error) {
    console.log("error", error);
    alert("Weather for that zip code is unavailable");
  }
}

