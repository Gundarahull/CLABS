const mynum=[1,2,3,4,5,6,7,8]

// FOR_EACH
mynum.forEach((num,ind,arr)=>{
    console.log(num);
    console.log("array",arr);
    console.log("index",ind);
   if(num>5){               //like this it doesnt retuen as ARRAY
    console.log(num);
   }
})

// //FILTER(for Condition)
// const filteruse=mynum.filter((num)=>{
//    return num
// })
// console.log("filter",filteruse);




//MAP (FOR ADDITIONAL BENEFITS)
// const mapuse=mynum.map((val)=>{
//     return val*5     //true//fasle //if we use condition it wil lprint TRUE OR FASE
// })
// console.log("mapuse",mapuse);


//MAPPING 

// //
// const mapping=mynum
//     .map((num)=> num*10)
//     .map((num) => num*2)
// console.log(mapping);


// console.log(mapping);