const express = require('express');
const cors = require('cors')();
const path = require('path');

const server = express();
const CLIENT = path.join(__dirname, 'public');

server.use(cors);

server.use(express.static(CLIENT));

server.listen(process.env.PORT, () => {console.log(`Listening on port ${process.env.PORT}`)});
