const express = require('express');

const App = express();

const Router = require('./Router/Data');
const PORT = process.env.PORT || 9000;

const cors = require('cors');

App.use(cors());

App.use('/user',Router);


App.listen(PORT, ()=>{
    console.log('Connected.....');
});
