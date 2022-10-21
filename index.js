const express = require('express');

const App = express();

const Router = require('./Router/Data');

const cors = require('cors');

App.use(cors());

App.use('/apiuser',Router);

App.listen(process.env.PORT || 9000, ()=>{
    console.log('Connected.....');
});