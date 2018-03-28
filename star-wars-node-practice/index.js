const axios = require('axios');

const endpoint = process.argv[2];

axios
  .get(`https://swapi.co/api/${endpoint}`)
  .then(res => console.log(res.data.count))
  .catch(err => console.log(err.response.data));
