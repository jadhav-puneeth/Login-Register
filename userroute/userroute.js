const express = require('express');
var app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://jadhav_puneeth:puneeth29@cluster0.at5zrd9.mongodb.net/sample?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to db")
    }
})


const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

let usermodel = mongoose.model('Details', userSchema);


//Login
router.post("/login", (req, res) => {
    usermodel.findOne({ name: req.body.name }, (err, user) => {
        if (user) {
            console.log(req.body);
            if (user.password == req.body.pass) {
                res.send({ message: " Login Successfull"})
            }
            else {
                res.send({ message: "Invalid Password" })

            }
        }
        else {
            res.send({ message: "User Not Registered" })
            console.log("User Not Registered")
        }
    })


})
//Registration
router.post("/register", (req, res) => {
    usermodel.findOne({ name: req.body.name }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Registered" })
            console.log("user already rgistered")
        }
        else {
            console.log(req.body);
            var newuser = new usermodel({ name: req.body.name, password: req.body.pass });
            newuser.save(err => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({ message: "Successfully Registered" })
                }
            });
        }
    })
})

router.get("/getUsers",(req,res)=>{
    usermodel.find({},(err,users)=>{
        if(err){
            res.send({message:"could not get users"});
        }
        if(users){
            console.log(users);
            res.send(users);
        }
    })
})


module.exports = router;