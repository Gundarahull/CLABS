const marvel=["IRONMAN","SPIDERMAN","THOR","BLACK PANTHER"]
const DC=["SUPERMAN","BATMAN","FLASH"]
// marvel.push(DC)  //just pushing the DC into MARVLE
// console.log(marvel);
const  heroes = marvel.concat(DC); //combiing the two arrays by conatct
// console.log(marvel);
// console.log(heroes);


///usimg the spread operator
const spread_hero=[...marvel,...DC,"WONDER WOMEN"]
console.log(spread_hero);

let newarray=[1,2,3,[4,5,6,7,[5,7,8,[902,3848]]]]
let flatarray=newarray.flat(Infinity); //it give all the eleemnts 
console.log(flatarray);

let a=1
let b="hello"
let c=56
let d=Array.of(a,b,c) //its creating a new array with elements
console.log(d);