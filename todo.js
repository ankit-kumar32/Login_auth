//const mysql=require('mysql')
const express=require('express')
//const express=require("express");
const cors=require('cors')
const mysql=require('mysql')
const dotenv=require('dotenv')
dotenv.config()
const app=express();

app.use(cors());
//middleware which allows to cors request
app.use(express.json());


function insertUserToDB(name,email,college){

    let query=`insert into users (name,college,email) values('${name}','${email}','${college}')`
    let res= pool.query(query);
   // conn.end();
    console.log("Done inserting");
  }
  function f(){
    console.log("f is being called");
  }

function addUserApi(req,res){
    let name=req.body.name;
    let email=req.body.email;
    let college=req.body.college;
    insertUserToDB(name,email,college);
    //console.log()
    f()
    res.status(201).send({"success":true})
 }



 // let pool=mysql.createPool({
//     host:process.env.HOST,
//     user:process.env.USER,
//     password:process.env.PASSWORD,
//     database:process.env.DB,
//     connectionLimit:process.env.CONN_LIM
// });
// app.use(function(req,res,next){
//     //req,res are just body
//   req.body.user="Sourav";
//   console.log(req.body);
//   next();
//   //in response there is nothing like body 
//  // console.log(res.body);
// });

// app.use(function(req,res,next){
//     //req.body.user="Ankit"
//     console.log("Middleware 1");
//     let oldSendFunction=res.send;
//     res.send=function(data){
//         console.log(data);
//         if(data.error){
//             res.send=oldSendFunction
//             res.send({"Error":"something went wrong"});
//         }
//         else {
//             res.send=oldSendFunction;
//             res.send({"Success":true})
//         }
//     }
//     next();
//     console.log("EndMiddleware 1");
// })
// app.use(function(req,res,next){
//     //req.body.user="Ankit"
//     console.log("Middleware 2");
//     next();
//     console.log("Endmiddleware 2");
// })

//this middleware only run for checkparity Api not others
// app.use('/CheckParity',function(req,res,next){
//     //req.body.user="Ankit"
//     console.log("Middleware 3");
//     next();
//     console.log("EndMiddleware 3");
// })

// function middle2(req,res,next){
//     //req.body.user="Ankit"
//     console.log("Middle 2");
//     next();
//     console.log("Endmiddle 2");
// }

// function middle4(req,res,next){
//     //req.body.user="Ankit"
//     console.log("Middle 4");
//     next();
//     console.log("Endmiddle 4");
// }
// //insted of calling one middleware function it will call multiples function calls present in list;
// app.use('/countVowels',[middle2,middle4])




// function countVowels(name){
//     name=name.toLowerCase();
//     let count=0;
//     const vowels=['a','e','i','o','u'];
//     for(let i=0;i<name.length;i++){
//         if(vowels.includes(name[i]))count++;
//     }
//     return count;

// }
// function countVowelsApi(req,res){
    
//     console.log(req.body);
//     if(!req.body.name){
//         res.send({"error":"name is empty"})
//     }
//     let name=req.body.name;
//     console.log(name);
//     let count=countVowels(name);
//     res.status(200).send({"vowels":count});
// }

//app.get('/countVowels',countVowelsApi);

// function CheckParity(num){
//    return num%2==0?"even":"odd";
// }
// function CheckParityApi(req,res){
//     let num=req.body.num;
    
// throw new Error("Something bad happened");
//  }


// let query=`insert into users (name,college,email) values('${name}','${email},'${college}')`
  //  return new Promise((resolve,reject)=>{
  //   pool.query(query,(err,res)=>{
  //   //  console.log(res)
  //   if(err)reject(err)
  //   resolve(res.insertId)
  //  });
  //  });
 // console.log("Done inserting");

 //app.get('/CheckParity',CheckParityApi);
// async function getAllUsers(req,res){
//   let response=await User.findAll()
//   res.status(200).send(response)
// }
app.post('/addUser',addUserApi)
//app.post('/addTodo', addTodoApi)
//app.get('getAllUsers',getAllUsersApi)
//userID,task
 //app.post('/addTodo',addTodoApi)

const port =3048;
app.listen(port,function(){
  console.log("I am Listening");
})

