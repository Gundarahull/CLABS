class User{
    constructor(name, email,password){
        this.name = name;
        this.email= email; 
        this.password = password;
    }

    //name of the method should be equal
    get password(){
        return `${this._password}abdhvsj`
    }

    set password(val){    
        console.log(val);
        this._password=val  
    }

    get email(){
        return `This is ${this._email}`
    }

    set email(value) {
        //value refers to that emai
        this._email=value
    }
}

//the arguemnts which in the cosructor should be the same as for the set method-->> 
const  user1 = new User("John Doe","john@doe.com","mypass");
console.log(user1.password);
console.log(user1.email);