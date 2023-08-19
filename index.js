//impure functions-> This which changes outside world
// let count=0;
// function incrementCount(){
//    count+=1;
//    return count;
// }


//pure functions-> take input returns output
// function square(x){
//     return x*x;
// }

//functions are first class citizens we can treat functions just like variables
//ES6 arrow functions
// let square=(x)=>{
//    return x*x;
// }
// console.log(square(3))


//higher order functions 
// function f(l,g){
//     let sum=0;
//     for(let i of l){
//         sum+=i;
//     }
//     return (sum)
// }
//console.log(f([2,3,0,5],square));

//anonymous Functions 
// console.log(f([2,4,5,0]),(x)=>{
//     return x*x*x
// })


//currying 
// let getAreaFunction=(shape_type)=>{
//     if(shape_type==="circle"){
//         return (r)=>{
//             return 3.14*r*r
//         }
            
        
//     }
//     else if(shape_type==="square"){
//         return (side)=>{
//             return side*side
//         }
//     }

//     else if(shape_type==="rectangle"){
//         return (l,b)=>{
//             return l*b
//         }
//     }
// }

// console.log(getAreaFunction("circle")(5))
// console.log(getAreaFunction("rectangle")(5,4))



//how JS works 
//js=>browser based language
//v8 Engine runs Js
//node runtime env for js to run

//Dom (document object model) manipulation

//js is a single threaded synchronous language


//memory phase and code execution phase
// function g(){
//     console.log("Hello there");
// }
// function f(){//execution context
//     var x=3;
//     var y=4;
//     console.log(x+y)
    
// }
// //global execution context
// f();
// g();
//console.log(x+y);
//when function f is called its own execution context is created varibles are hoisted and code exuection phase . 
//once  all the execution over execution context of f got destroyed and everythings in it
// so we can not access x outside function


// function f(a){
//    a[1]=3
//    console.log(a);
// }
// let a=[2,5,7];
// //f(a)
// f([...a])
// console.log(a);

// //Dom manipulations
// let onclick=()=>{
//    let curr= new Number(documents.getElementsByTagName("span")[0].innerText);
//    curr=curr+1;
//    document.getElementsByTagName("span")[0].innerText=curr;
//    document.getElementsByTagName("body")[0].style.backgroundColor="red";

// }

// document.getElementsByTagName("button")[0].addEventListener(
//     "click",onclick
// )

/*
event propagation and bubbling 
event bubbling - event trigger flows from child->parent->grandparent
event capturing- event trigger flows from top->down like grandparent->parent->child
 flag=true event capturing and if flag=false its event bubbling
 first event capturing propgates and then event bubbling 
 in order to prevent there is event e.stopPropgation()
*/


/*call backs function ->  function that we have passed in hof function.  and calling that function is 
known as callback
*/

/* Web api(Browser API)
in order to use  certain functionalities of browser it exposes Apis known as web apis
*/

/*
   once we gave the functions to web apis 
   if callstack executes its all line and got empty in order to run the fuctions that are in web browswer 
   it pushes that functions in callback queue. first callstack execute everything that is in it. once it got 
   empty it looks in callback queues if there are something left in it to execute
*/


// setTimeout(
//    ()=>{console.log("Timeout")},2000
// )
// console.log("xyz");

/*
1. user is valid and authorized
2. Fetch video progress
3. Fetch question progress
4. combine total return.
*/

// let checkUser=(email)=>{
//    return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//          res({"Name":"Ankit"})
         
//       },2000)
//    })
   
// }

// let x=checkUser("ankit@iitbhu.com");
// x.then((res)=>{
//    console.log(res);
// }).catch((err)=>{

// }

// )
// let fetchProg1=(user)=>{
//    setTimeout(()=>{
//       //it should not be returned like function does not have parent. its in browser
//       return prog1;
//    },5000)
// }
// let fetchProg2=(user)=>{
//    setTimeout(()=>{
//       //it should not be returned like function does not have parent. its in browser
//       return prog2;
//    },4000)
// }

// let combine=(prog1 ,prog2)=>{
//    setTimeout(()=>{
//       //it should not be returned like function does not have parent. its in browser
//       return prog;
//    },5000)
// }

//let user=checkUser("ankit@iitbhu.com")
// let prog1=fetchProg1(user);
// let prog2=fetchProg2(user);
// let prog=combine(prog1,prog2);

//promises chain
// function a(){
//    return new Promise();
// }

// function b(){
//    return new Promise();
// }
// function c(){
//    return new Promise();
// }

// a().then(()=>{
//    b().then(()=>{
//       c();
//    })
// })
//a,b,c,d,e,f

//it behaves diffrently in case of var and let var has no block level scope so after the settime out function 
//is over i=6 every function can access the its parent lexical environment thus can access the varibles 
//while in case of let every time ith values changes and a new scopes get created 
for(let i=1;i<=5;i++){
   setTimeout(()=>{
    console.log("Ran for ",i," seconds");
   },i*1000)
}




