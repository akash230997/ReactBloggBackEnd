const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Store = require('./data')

app.use(express.json())
app.use(cors())

const Port = process.env.PORT || 3020;

mongoose.connect("mongodb://127.0.0.1:27017/myRegisters")
.then(()=>{
    console.log('Connected with Database.')
})

//creating schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    rePassword:String
})
//create collection
const User = new mongoose.model('User',userSchema);

app.post('/register', async(req,res)=>{
    const data = req.body;
    const {name , email , password } = data;
    User.findOne({email:email},(err,get)=>{
        if (get){
            res.send({message:"User Already Registered!"});
        }else{
            const createUser = new User({
                name,
                email,
                password
            });
            createUser.save((err)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered"});
                }
            })
        }
    })
})

app.post('/login', (req, res) => {
    const {email, password } = req.body;
    User.findOne({email:email},(err,get)=>{
        if (get){
            if (password === get.password){
                res.send({ message: "LogedIn "})
            }else{
                res.send({message:"Password doesn't match...!!"})
            }
        }else{
            res.send({message:"user is not registered!!"})
        }
    })
})

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send("Hello From The Server : ");
})

app.get('/data', (req, res) => {
    res.send(Store);
})

app.listen(Port,()=>{
    console.log(`Connected with Port : ${Port}`);
})

// // app.use(express.json());
// // app.use(express.urlencoded());
// // const mongooseUrl = "mongodb://127.0.0.1:27017/myDataRegistration";

// // mongoose.connect(mongooseUrl,{
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true
// // }),()=>{
// //     console.log('Database Connected...')
// // }

// // const DataSchema =new mongoose.Schema({
// //     name:String,
// //     email:String,
// //     password:String,
// //     rePassword:String,
// // })

// // const registerData = new mongoose.model('registerData',DataSchema);



// app.get("/", (req,res)=>{
//     res.send('Hello From The Server!!')
// })

// app.get("/Data" , (req, res) => {
//     res.send(Store);
// })
// // app.get('/register', (req, res) => {
// //     res.send('MyRegistration!!!')
// // })


// // app.get('/login', (req, res) => {
// //     res.send('MyLogin!!!')
// // })


// app.listen(PORT,()=>{
//     console.log(`Connected....${PORT}`);
// })