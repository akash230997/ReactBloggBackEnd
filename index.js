const express = require('express');
const app = express();

const data = require('./data');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
// const JsonData = JSON.parse(data[0].id)
// console.log(JsonData)

const middlewareTesting = (req,res,next) =>{
    app.use(cors());
    next()
}

app.get("/", (req,res)=>{
    res.send('Hello From The Server!!')
})

app.get("/Data", middlewareTesting , (req, res) => {
    res.send(data);
})

app.listen(PORT,()=>{
    console.log('Connected....');
})