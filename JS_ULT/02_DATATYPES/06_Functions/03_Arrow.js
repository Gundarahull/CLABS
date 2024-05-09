let a=5
const user={
    username:"RAhul",
    age:11,
    welcone:function(){
        console.log("Welcome to our website "+this.username);
        console.log(this); //it refers to the whole objvet
    },
    five:()=>{
        console.log("this is awesome",a);
    }
}
// console.log(user.username);
// console.log(user.welcone()); //we are logging thats why its geeting undefined
// user.welcone() //only direct use function  we can call like this 
user.five()
user.welcone()


//this is in the funvtion refers to glibal
// function one(){
//     let username="rahul"
//     console.log(this); //it will show all the funvtuinalities
//     console.log(this.username); //its showimf undefined anna what r u talking rey
//because this hlo manaku konni methods untayi kadha avey vasthayi
// }
// one();//when we directly call a funt


// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+this
// //ARROW FUNCTIONS
// const two=()=>{
//     let name="PUHUL"
//     console.log("IN ARROW",this.name); //in the arrow function it cant acces the "this" its refering to the global like Browser
// }
// two()

// //implict return 
// const three=(x,y)=> (x+y);
// console.log(three(2,3));

// // ..in the parenthesis it direvtly return
// const four=(msg)=>{
//     return msg          //explict retun have to write the return keyword
// }
// console.log(four("hi man"))
