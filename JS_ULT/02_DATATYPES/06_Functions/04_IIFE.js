
//unnmaed IIFE
((msg)=>{
    console.log(msg);
})("hi");

// ; it is iimportant to stop the IIFE

(function name(){               
  var privateVar = "I am private";
  console.log("NAMED IIFE");
})();       //the name itself is enough no need to write here name man