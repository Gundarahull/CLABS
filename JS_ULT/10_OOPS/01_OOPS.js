//Objevt Literal
//direct creating the Object
//SIngleton Objevt-by Class

// const myobj={
//     name:"RAHUl",
//     age:22,
//     funcy:function(){
//         return(`HI MAN THIS IS ${this.name} AND I AM ${this.age}`);
//     }
// }

// console.log(myobj.funcy());


//SINGLETON OBJEVTS
function f50(mem1,mem2,mem3){
    this.mem1=mem1
    this.mem2=mem2
    this.mem3=mem3
    //methods
    this.welcome=function(){
        console.log("Welcom e to F50",this.mem1);
    }
}

const  obj1 = new f50("Rahul","SUnny","Cool");
const  obj2 = new f50("GUnda","MITHI","DARLING");
//mew- creating a new memoery for the obj
console.log(obj1.mem1);
(obj2.welcome());




//PROTOTYPE
//--CREAting new method by usimg this
// function newroom(name,age){
//     this.name=name,
//     this.age=age
// }

//creating methods by using prototype

// newroom.prototype.members=function(){
//     console.log(this.name);   //this keyworhere yevaru pilisthey valuu...........in hindi """"this means JIS" 
// }


// const new1=new newroom ("Rahul",24)
// const new2=new newroom ("Gunda",18)

// new1.members();






