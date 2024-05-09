class user{  //creating class with USer name
    constructor(username,password,email){
        this.username=username,
        this.password=password,
        this.email=email
    }

    getmail(){
        return ("UR MAIL ID IS ",this.email)
    }

    addtwo(){
        return(`${this.email}plus${this.password}`)
    }
}

//assign to the variablw with new instance
const xlass=new user('rahul','1234','rahul@gmail.com')
console.log(xlass.getmail())
console.log(xlass.addtwo());