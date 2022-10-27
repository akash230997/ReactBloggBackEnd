const express = require('express');

const data = require('./data')

// const JsonData = JSON.parse(data[0].id)
// console.log(JsonData)

const App = express();

const cors = require('cors');

const PORT = process.env.PORT || 5000;

App.use(cors());

App.get("/",(req,res)=>{
    res.send('Hello From The Server!!')
})

App.get("/Data", (req, res) => {
    res.send(data);
})

App.listen(PORT,()=>{
    console.log('Connected....');
})