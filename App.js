const express=require("express");
const cors=require('cors')
const bcrypt=require('bcrypt')
const mysql=require('mysql')
const {User}=require('./db')
const app=express();

app.use(cors());
//middleware which allows to cors request
app.use(express.json());
//SQL injection 
//MVC architecture
//ORM=>object relation Mapping
  function insertUserToDB(name,email,password){
 return User.create({
    name:name,
    email:email,
    password:password
 })
}
async function addUserApi(req,res){
   let name=req.body.name;
   let email=req.body.email;
   let password=await bcrypt.hash(req.body.password,10);
   let response=await insertUserToDB(name,email,password);
   res.status(201).send({"id":response.id})
}

async function loginApi(req,res){
  let email=req.body.email;
  let password=req.body.password;
 let user=await User.findOne({
    where:{
      email:email,
      password:password
    }
  })

let matched= await bcrypt.compare(password,user.password);
if(matched){
  res.status(200).send({"Success":true})
}
else{
  res.status(401).send({"LoggedIn":false})
}
}
 app.post('/signup',addUserApi)
 app.post('/login',loginApi)
 

app.use(function(err,req,res,next){
    console.log(
        "some unexpected error happened"
    )
    console.log(req)
    res.status(500).send({"error":"please retry in some time"})

})
//Error Handling Middleware
app.use(function(err,req,res,next){
    console.log("some unexpected error happenend")
    console.log(req);
    res.status(500).send({"error":"please retry in some time"})
})
const port =3044;
app.listen(port,function(){
  console.log("I am Listening");
})


