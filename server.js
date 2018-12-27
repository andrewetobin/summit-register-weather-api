require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

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
  console.log(lat);
  console.log(lon);
  response.send('Here is the weather');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
