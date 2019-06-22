const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { fetchAppsList } = require('./api/fetchAppsData');
const { cacheData, getCache } = require('./cache/cache');

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('/fetchAppsList', (req, res)=> {
  
  const cashedlist = getCache('appsList');
  if( cashedlist !== undefined ) {
    return res.status(200).send(cashedlist);
  }
  

  Promise.all([
    fetchAppsList()
  ]).then((response) => {
    const appsList = response[0].data.feed;
    if ( response[0].status !== 200 ) {
      return res.status(500).send(' something went wrong ');
    }
    
    if( appsList !== undefined ) {
      cacheData('appsList', appsList);
      return res.status(200).send(appsList);
    }
  })
  .catch( err => res.status(500).send(err));
})


app.get('/*', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});


app.listen(port, () => {
    console.log(`api is running on ${port} go to http://localhost:8080/ to if you runned 'npm run dev_api' `);
})