// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// continure
//ignoring the next line
//after the condition pass

// let score=20
// const hi=90
// {
//     const hi=100
//     console.log(score);
//     console.log(hi);
// }

//HIGH ORDER LOOPS
//FOR-OF LOOPS

const rahul="rahulrai"    
// for (const iterator of rahul) {    //like normal loop
//     console.log(iterator);
    
// }

//MAP--data type--<><>OBJECT
const map=new Map() //object
map.set("A","1")
map.set("b","2")
map.set("d","4")
console.log("mapp>>>>>",map.get("A"));

// for (const [key,value] of map) {  //destructring 
//     console.log(key,value);
// }



// for (const [firstIndex_KEY,Sexondindex_Value] of map) {
//     console.log(firstIndex_KEY);
//     // console.log(map[key]);
// }


let str=[1,3,4,5,5,6]
for (const key in str) {
    console.log("ste IN",key);
}


//FOR_IN LOOP
const myobj={
    name:"RAHUL",
    age:23
}
// console.log(myobj.age)

for (const key in myobj) {
    // console.log(key,myobj[key]);
}

const myarray=["IRONAM","SPIDERMAN","THOR"]
for (const i in myarray) {
//    console.log("keys",i);    //nomrally IN LOOP they come with the key , //nomraally the array has also have keys
//    console.log(myarray[i]);
}



//FOR_EACH LOOPS
// myarray.forEach((value,index,array)=>{   //in foreach it have vslue,index,arr
//         console.log(value,index,array);
// })


const db=[
    {
        name:"RAHUl",
        age:22
    },
    {
        name:"COOL",
        age:23
    },
    {
        name:"GUNDA",
        age:24
    },
]

// for (const i of db) {      //FOR_OF LOOP DIRECT VALUE
//     // console.log(i.name);
// }

// for (const key in db) {    //FOR_IN LOOP KEY
//    console.log(db[key].name);
// }

// db.forEach((value)=>{     //FOREACH IT HAS VAUE<INDEX<ARR
//     // console.log(value.name);
// })