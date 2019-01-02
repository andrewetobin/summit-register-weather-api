# Summit Register Weather API (Back End)

Visit the deployed API here: https://summit-register-weather-api.herokuapp.com/



**Front End**

  Visit the front end github repo here: https://github.com/christopherchateau/summit-register-FE

  Visit the front end deployed site here: https://summit-register.herokuapp.com/

###### Core Contributors
  - Chris Chateau | github.com/christopherchateau
  - Andrew Mockett | github.com/MacInnes
  - Justin Stewart | github.com/JStewart3313
  - Andrew Tobin | github.com/andrewetobin

## Setup

- Fork or clone this repo: `https://github.com/andrewetobin/summit-register-weather-api`
- Run `npm build`
- Run `npm start` to spin up the server
- Visit `localhost:3000` in your browser.

## Testing
- Run the test suite with `npm test`

## Endpoints

**GET `/?lat=${latitude}&lon=${longitude}`**
 - This will provide hourly weather info for the location provided by the latitude and longitude.

Example Response:
```json
{
    "summary": "Clear throughout the day.",
    "icon": "clear-day",
    "data": [
        {
          "time": 1546462800,
          "summary": "Clear",
          "icon": "clear-day",
          "precipIntensity": 0,
          "precipProbability": 0,
          "temperature": 9.34,
          "apparentTemperature": 9.34,
          "dewPoint": 9.34,
          "humidity": 1,
          "pressure": 1020.82,
          "windSpeed": 1.71,
          "windGust": 4.86,
          "windBearing": 298,
          "cloudCover": 0,
          "uvIndex": 1,
          "visibility": 6.05,
          "ozone": 348.93
        },
        {
          "time": 1546466400,
          "summary": "Clear",
          "icon": "clear-day",
          "precipIntensity": 0,
          "precipProbability": 0,
          "temperature": 13.48,
          "apparentTemperature": 8.19,
          "dewPoint": 8.77,
          "humidity": 0.81,
          "pressure": 1022.31,
          "windSpeed": 3.1,
          "windGust": 6.21,
          "windBearing": 320,
          "cloudCover": 0,
          "uvIndex": 1,
          "visibility": 10,
          "ozone": 346.09
        },
        {
          "time": 1546470000,
          "summary": "Clear",
          "icon": "clear-day",
          "precipIntensity": 0.0015,
          "precipProbability": 0.04,
          "precipAccumulation": 0.029,
          "precipType": "snow",
          "temperature": 15.03,
          "apparentTemperature": 8.87,
          "dewPoint": 7.48,
          "humidity": 0.71,
          "pressure": 1023.76,
          "windSpeed": 3.73,
          "windGust": 6.83,
          "windBearing": 339,
          "cloudCover": 0,
          "uvIndex": 0,
          "visibility": 10,
          "ozone": 342.5
        }
}

```

## Tools/Dependencies

* Node.js
* [Express](https://www.npmjs.com/package/express)
* [Body-Parser](https://www.npmjs.com/package/body-parser)
* [Mocha](https://www.npmjs.com/package/mocha)
* [Chai](https://www.npmjs.com/package/chai)
* [chai-http](https://www.chaijs.com/plugins/chai-http/)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [pryjs](https://www.npmjs.com/package/pryjs)
* [querystring](https://www.npmjs.com/package/query-string)
* [nyc](https://www.npmjs.com/package/nyc)
