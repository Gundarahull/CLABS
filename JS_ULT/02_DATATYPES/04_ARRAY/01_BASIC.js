const array=[1,2,3,45,89]


//SHALLOW cOPY-it will refelct the original array
console.log(array); //[1, 2, 
array.push(80)
console.log(array);


//DEEP COPY
// CHNAGE WONT REFLECT IN THE OROIGINA
const arr=array
console.log("deep",arr.sort(reverse=true));

//methods

// array.push(80) //at last index
// array.pop() //remove  from the last index
// array.unshift(69) //imsert at fisrt index
// array.shift() //remove first index

console.log(array.includes(88)); //print true or false
console.log(array.indexOf(45));

//theres is no findindex in array
//it belongs to syring

// console.log(array.join("RA")); // join all elements
// bind and returns string
console.log("ORIGINAL ARRAY",array);
console.log(array.splice(1,4)); //splice manipulates the original array
console.log(array);

//