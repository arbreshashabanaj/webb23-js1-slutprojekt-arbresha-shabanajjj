
     let weather = {
    apiKey: "6da0ef1cd6f02ba52f27ab4dd98b1b8b",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        
        .then((response) => {
          if (!response.ok) {
            
          }
          return response.json();
        })
       
        .then((data) => {
          if (data.cod === "404" || !data.name) {
            throw new Error("Ingen stad hittades."); 
          }
           this.displayWeather(data); 
         }) 
     
          .catch((error) => {
          if (error.message.includes("Nätverksfel")) {
            alert( "Ett nätverksfel inträffade");
          } else if (error.message.includes("Ingen stad hittades")) {
            alert("Ingen stad hittades");
          }  else {
            alert("Ett nätverksfel inträffade");
          } 
        });  

    }, 
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
       document.querySelector(".city").innerText = "Väder i " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png"; 
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp ").innerText = Math.round(temp) + "°C";
      document.querySelector(".humidity").innerText =
        "Luftfuktighet: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Vind: " + speed + " m/s";
      document.querySelector(".weather").classList.remove("loading");
    },
   
    search: function () {
      const city = searchBar.value;
      this.fetchWeather(city);
    },
  };
  const weatherForm = document.querySelector("#weatherForm");
const searchBar = document.querySelector(".search-bar");



    weatherForm.addEventListener("submit", function (event) {
      event.preventDefault();
      weather.search();
    });
  weather.fetchWeather("Landskrona");    

  























 










































