const express = require('express');

const server = express();

const PORT = 3001;
server.get('/', (req, res) => {
  res.send('')
})
server.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`Express Web Server is Listening on port ${PORT}`)
})
