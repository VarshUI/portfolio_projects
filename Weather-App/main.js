// Function to fetch and display weather data
async function fetchWeather(cityName) {
  const url = `https://open-weather13.p.rapidapi.com/city/${cityName}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c37947bf44msh54417a02e46f84cp148781jsn9ad694da3a8a",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Changed from response.text() to response.json()
    console.log(result);

    // Display the weather data
    displayWeather(result);
  } catch (error) {
    console.error(error);
    showError("An error occurred while fetching the weather data.");
  }
}

// Function to display the weather data
function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
}

// Function to display error message
function showError(message) {
  const weatherContainer = document.getElementById("weather-container");
  weatherContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

// Event listener for form submission
document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = document.getElementById("city-input").value.trim();
  if (cityName) {
    fetchWeather(cityName);
  } else {
    showError("Please enter a city name.");
  }
});
