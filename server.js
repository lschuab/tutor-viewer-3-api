const express = require("express");
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config);
const { Model } = require('objection');
const port = process.env.PORT || 8000;
const cors = require('cors')
const bodyParser = require('body-parser');

Model.knex(knex);

const app = express()
  .use(bodyParser.json({ extended: true }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors());



var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});