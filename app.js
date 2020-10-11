const dotenv = require('dotenv');
const http = require('http');
const express = require('express');

//* Load env
dotenv.config();

//* Server instances
const app = express();
const httpServer = http.Server(app);

//* Routes
const indexRouter = require('./routes/indexRouter');

//* Bind routes
app.use('/', indexRouter);

//* Listen http
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'

httpServer.listen(PORT, HOST, () => console.log('Server started'));
