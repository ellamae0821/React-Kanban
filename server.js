const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require ('./models');
const cardRoute = require('./src/routes/cards.js');

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static('public'));




app.use('/api', cardRoute);



app.listen(PORT, () => {
  db.sequelize.sync({
    force: false
  });
  console.log(`Listening on port: ${PORT}`);
});