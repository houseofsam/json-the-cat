const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    // Mentor session code
    if (response) {
      if (response.statusCode > 500) {
        return callback('server issue, try again later!', null)
      } else if (response.statusCode > 400) {
        return callback('please check input/data', null)
      }
    }
    // Mentor session code
    
    // callback(null, response && response.statusCode);  

    const data = JSON.parse(body);
    
    if (data.length === 0) {
      return callback('Breed not found!', null);
    } else {
      return callback(null, data[0].description);
    }
  });

};


module.exports = { fetchBreedDescription };


