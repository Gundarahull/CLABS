

//function exical scope
// const age=22
// function one(){
//     const name="rahuk"
//     function two(){
//         console.log(age);
//     }
//     console.log("in the one scope",age);
//     two()
// }
// one()


//see here we are accesing before the function intikkazation 
// console.log(addone("HI"))
addone("HI")
// console.log(newone);
function addone(msg){
    console.log(msg)
}

// const newone=addone("this si new")

// //function expressiion
// // assigning the function to variables =+


// const addtwo=function(msg){
//     return msg
// }
// console.log(addtwo("hi there")); //calling before intillazation when we are assiging to the vatiable