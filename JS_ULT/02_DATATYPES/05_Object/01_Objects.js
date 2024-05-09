//OBJECT LITERAL

// Object.create() //through constructor //singleton


//accesing the Symbol
const sym=Symbol("key1")  //okasri chusali
console.log("symbol",sym);

const user={
    name:"RAHUL",
    [sym]:'sample',  //impoertant  
    age:22,
    "full name":"RAHUL RAI",
    arr:[1,2,3,4]
}

for (const key in user) {
    console.log(user[key]);
}

// console.log(user.name); //its also of coorect method
// console.log(user["full name"]); //this is the correct method to use
// //to acess the symbol we use []
// console.log(typeof user[sym]);


// user.age=23 //overriding
// console.log(user.age);
// // Object.freeze(user) //in these we are freeseing
// console.log(user);

user.greeting=function(num){
    console.log(`hello world ${num} ,${this.name}`);
}
console.log(user.greeting(5));
// console.log(user);

