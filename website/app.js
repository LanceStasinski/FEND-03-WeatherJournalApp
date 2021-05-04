// OpenWeatherMap credentials
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '568e2956508e063f36a0424b221e7e3e';


//POST data to local server

//GET data from local server




//update the UI - need to have get and post functions first
const generate = document.getElementById('generate');
generate.addEventListener('click', updateJournal());
function updateJournal () {
  const zipCode = document.getElementById('zip').value;
  const feeling = document.getElementById('feeling').value;

  //get weather from web api using input zip code
  getWeather(baseURL, zipCode, apiKey);

}

//function that gets weather from the web api
const getWeather = async (baseURL, zip, key)=>{
  const res = await fetch(baseURL+zip+key);
  try {
    const data = await res.json();
    return data;
  } catch(error) {
    console.log("error", error);
    alert("Weather for that zip code is unavailable");
  }
}
