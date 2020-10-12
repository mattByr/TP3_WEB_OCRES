
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var ville = document.getElementById('city-input').value;
  //alert(ville);
  const apiWeather = new API_WEATHER(ville);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      
      

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
      //alert('foncion start ok');
      console.log("foncion start ok");
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
