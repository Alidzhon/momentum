window.onload = function() {
      window.setInterval(function() {
            const date = new Date();

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;

            let clock = hours + ":" + minutes + ":" + seconds;
            const time = document.querySelector('.time');
            time.textContent = clock;
            showDate();  
      }, 1000);  
      
   
      const dateInput = document.querySelector('.date');
      function showDate(lang) {
            
            const date = new Date();
            const options = {
                  weekday: "long",
                  month: "long",
                  day: "numeric",        
            };
            let currentDate;
            if (lang === "eng") {
                  currentDate = date.toLocaleDateStrin("de-De", options);
            }
            else {
                  currentDate = date.toDateString("ru-Ru", options);
            }
            dateInput.textContent = currentDate;
      }
      
      
      const greeting = document.querySelector('.greeting');
      const name = document.querySelector(".name");

      const greetingTranslation = {
            ru: ["Доброе утро", "Добрый день", "Добырый вечер", "Добпый ночи"],
            eng: ["morning", "afternoon", "evening", "night"]      
      };


      function getTimeOfDay(lang = "eng") {
            const date = new Date();
            const hours = date.getHours();
            
          if (hours >= 6 && hours < 12) {
               return greetingTranslation[lang][0];
          }
          else if (hours >= 12 && hours < 18) {
              return greetingTranslation[lang][1];
          }
          else if (hours >= 18 && hours <= 23) {
               return greetingTranslation[lang][2];
          }
          else {
              return greetingTranslation[lang][3];
          }  
      }
      function showGreeting(lang) {
            const greetingText = getTimeOfDay(lang);
                  greeting.textContent = `Good ${greetingText},`;
                  name.placeholder = "[Enter your name]";
      }

      showGreeting();

      function setLocalStorage() {
           localStorage.setItem('name', name.value);  
      }
      window,addEventListener('beforeunload', setLocalStorage);



const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

};