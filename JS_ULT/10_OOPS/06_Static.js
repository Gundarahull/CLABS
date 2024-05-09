// class User {  //creating class with User name
//     constructor(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     //static not to give access for the object
//     static getMail() {
//         console.log("hi",this.email);
//         return ("UR MAIL ID IS ", this.email);
//     }

//     addTwo() {
//         return(`${this.email} plus ${this.password}`);
//     }
// }

// //assign to the variable with new instance
// const instance = new User('rahul', '1234', 'rahul@gmail.com');
// // console.log(instance.addTwo()); // Uncomment if you want to log addTwo method

// console.log(User.getMail()); // Log the static method



class User {  //creating class with User name
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    //static method to access instance properties
    static getMail(rahu) {
        console.log("hi");
        return ("UR MAIL ID IS " + rahu.email);
    }

    addTwo() {
        return(`${this.email} plus ${this.password}`);
    }
}

//assign to the variable with new instance
const instance = new User('rahul', '1234', 'rahul@gmail.com');
// console.log(instance.addTwo()); // Uncomment if you want to log addTwo method

console.log(User.getMail(instance)); // Log the static method with an instance passed as an argument
