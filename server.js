require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const fetch = require('node-fetch');

const environment = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Weather';

// app.get('/', (request, response) => {
//   response.send('Here is the weather');
// });
app.get('/', (request, response) => {
  let lat = request.query.lat;
  let lon = request.query.lon;
  let apiKey = process.env.DARK_SKY_KEY
  let address = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`
  fetch(address)
    .then(response => response.json())
    .then(weatherInfo => response.send(weatherInfo['hourly']))
    .catch(error => console.log({ error }));
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
