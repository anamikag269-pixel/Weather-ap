async function getWeather(){

  const city = document.getElementById("city").value;

  const apiKey = "6395cc7581c6666b373602e344f22ef9";

  const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <h3>${data.main.temp}°C</h3>
    <p>${data.weather[0].main}</p>
  `;
}