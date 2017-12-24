const express = require('express'),
  app = express(),
  {port, dbConnection} = require('./config/config'),
  massive = require('massive'),
  bodyParser = require('body-parser'),
  path = require('path');

(async () => { app.set('db', await massive(dbConnection)) })()

app.use(bodyParser.json())
require('./middleware/dbRoutes')(app)
require('./routes/ideas')(app)

//<-----production ----->
// app.use(express.static(path.join(__dirname, '/build')))
// app.get('*', (req, res) => {
//   res.sendFile((path.join(__dirname, '/build/index.html')))
// })
//<--------------------->

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
