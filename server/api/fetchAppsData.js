const axios = require('axios');
const {url , headers } = require('./itunes.configs');

const fetchAppsList =  async () => {
  const options = {
    url,
    method: 'GET',
    headers,
  };
  return await axios.request(options);
};


module.exports = {
  fetchAppsList,
}
