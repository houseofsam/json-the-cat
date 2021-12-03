const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response && response.statusCode);
    
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
  
    if (data.length === 0) {
      console.log('Breed not found!');
    } else {
      console.log(data[0].description);
    }
  }
});