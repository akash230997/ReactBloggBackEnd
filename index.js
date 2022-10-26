const express = require('express');

const App = express();

const MyRouter = require('./Router/Data');
const PORT = process.env.PORT || 9000;

const cors = require('cors');

App.use(cors());

App.use('/user',MyRouter);


App.listen(PORT, ()=>{
    console.log('Connected.....');
});
