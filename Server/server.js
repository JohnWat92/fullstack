const express = require('express');
const server = express();
const PORT = 3001;
const pg = require('pg-promise')({});

const cors = require('cors');

const db = pg({
  host: 'localhost',
  port: 5432,
  database: 'fullstack',
  user: 'fullstackuser',
  password: 'password'
})

server.use(cors());

server.use(express.static(__dirname + '/public/build'));

server.get('/lol', (req, res) => {
  db.any(`SELECT * FROM lol`)
    .then(function(data){
      res.json(data);
    })
    .catch(function(error){
      console.log('something went wrong');
    })
});

server.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`Express Web Server is Listening on port ${PORT}`)
})

