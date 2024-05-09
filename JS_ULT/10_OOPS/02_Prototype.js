const name="RAHUL       "
// console.log(name.trueLength());
//LOW IQ
// console.log(name.trimEnd().length);

function newroom(name,age){
    this.name=name,
    this.age=age
}

//GIVING POWER// PROPERTY //METHOD TO ALL

// Object.prototype.getrahul=function(){
//     console.log(this.name);
//     console.log("RAHUL ra UNGAMMA");
// }

// let myarray=[1,2,3,4]

// const new1=new newroom ("Rahul",24)
// new1.getrahul()



//PROTOTYPE INHERTANCE
const user={
    name:"RAHUL",
    age:"22"
}

const room={
    roomname:"F50",
    members:6
}

// yevariki ---------> yevari nunchi
// room.__proto__=user;
//modern syntax for inhertance
Object.setPrototypeOf(room,user);
console.log("INHERTANCE   ",room.name);



// console.log(myarray.getrahul());    //giving to ARRAY

// console.log(name.getrahul()); //giving to name