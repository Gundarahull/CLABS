
//one way of defintition of function

// function add(a,b){  //paramters
//     // return (a+b)
//     console.log("MULTI",(a*b));
//     console.log("RAHUl"); //after retrun yem print kadhu
// }
// add(8,9)

//second way assiging to the  variable and calling that variable as a function

const rahu=function(a,b){
    console.log("with variable",a*b);
}
rahu(90,3)



// console.log(ret);
// console.log(add(5,6))

// function log(msg){   //we can pass the default value like msg="namaste"
//     if(msg){
//         return   `the message is ${msg}`
//     }else{
//         return ("enter the message");
//     }
   
// }
// // const message=log("hi man")=+
// const message=log("hi man") //if we dont pass the argument then its undefines

// console.log(message);


//REST OPEarTOR
function addtocart(a,b,c,...price){  //by the rest operator it retyrbs array
    return price
    //return array
}
console.log(addtocart(1,2,3,4,5,6));

//passing the object 

const user={
    name:"RAHUL"
}
function obj(anyobject){
    console.log(anyobject.name);
}
// obj(user)
obj({
    name:"COOl"
})