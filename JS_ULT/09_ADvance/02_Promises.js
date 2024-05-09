//CREATING PROMISE
// const promiseone=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("NEW PROMISE ONE");
//         resolve() //connecting to the .then
//     }, 1000);
// })

// //t0 consume
// // .then=>>>>>> resolve
// // .catch>>>>>>> reject
// promiseone.then(()=>{
//     console.log("PROMISE CONSUMED");
// })

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("PROMISE THREE");
    const a = 5;
    if (a == 7) {
      resolve({ name: "TAHUl", age: 22 });
    } else {
      reject("SOMETHING FISHY");
    }
  }, 1000);
});

promisethree
  .then((data) => {
     return data;
  }).then((againdata)=>{
    //console.log(againdata.name +" is "+ againdata.age+" years old")
    return againdata.name
  }).then( (finaldata)=>{
    console.log(finaldata);
  }).catch((err) => {
    console.log("error", err);
}).finally(()=>{
    console.log("DEFALULT")
})

const promisefive=new  Promise ((resolve ,reject )=>{
    setTimeout(() => {
        console.log("PROMISE Four");
        const a = 5;
        if (a == 5) {
          resolve({ lang: "JAVASCRIPT", age: "FIVE YEARS" });
        } else {
          reject("SOMETHING WENT WRONG IN JS");
        }
      }, 1000);
})

//PROMISES BY ASYNC AND AWAIT FUNCTION
async function asyncawait(){
    try {
        let resolved=await promisefive  //the one which we insert in the resolve
        console.log("async and await "+ resolved.lang);
    } catch (error) {
        //in the catch direct error
        console.log("error in promisw five",error);
    }
}
asyncawait()


//fetch
// fetch("www.google.com")
// .then((Response)=>{
//     console.log("response of url", Response);
// }).catch(err=>{
//     console.log("ERRR IN FETCHING");
// })



const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(">>>>>>>>>>",values);
});