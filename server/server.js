const express = require('express');
const next =  require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/Article');
const helmet = require('helmet');
const api = require('./api');

require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production'; 
const PORT = process.env.SVR_PORT || 8080;
const CLI_PORT = process.env.CLI_PORT || 3003;
const BASE_URL = `http:localhost:${PORT}`;

//Next's Js Custom Server
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();


//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/cms`);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',() => {
    console.log('Connected to MongoDB');
})

//Next's custom server prepared
app.prepare().then(() => {
    
    server.use(bodyParser.urlencoded({ extended: false}))
    server.use(bodyParser.json())
    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', `http://localhost:${CLI_PORT}`);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type', 'Access-Control-Allow-Origin', 'Origin');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
      });

    server.get('/_next/*', (req, res) => {
        handle(req, res);
      });
    
    api(server);

    server.all('*', (req, res) => {
        handle(req, res);
    });
    
    server.listen(PORT, (err) => {
        if(err) throw err;
        console.log(`>Ready on ${BASE_URL}`);
    });
})

