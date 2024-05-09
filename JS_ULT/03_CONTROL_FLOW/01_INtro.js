
let num=40
//short hand notation
//implecent scope
if(num>80) console.log("yes"),console.log("yes man");


//SWICTH 
const a =56

switch (a) {
    case 78:
        console.log("78");
        break;
    case 88:
        console.log("88");
        break;
    case 50:
        console.log("50");
        break;
    case 56:
        console.log("56");
        // break;
    case 99:
        console.log("99");
        break;

    default:
        console.log("default value in CASse");
        break;
}

switch ("APR") {
    case "JAN":
        console.log("yes");
        break;
    
    case "FEB":
        console.log("feb yes");
        break;
    
    case "MAR":
        console.log("mar yes");
        break;
    
    case "APR":
        console.log("apr yes");
        break;
    
        

    default:
        console.log("default");
        break;
}

//truthy and faslsy Vlaue

//Falsy value 
//  false 0,-0,0n,null.undefined,NaN,""

// all empty datatype except string are truthy values

////ternary operator
let b=90
b>80 ? console.log(true):console.log(false)
