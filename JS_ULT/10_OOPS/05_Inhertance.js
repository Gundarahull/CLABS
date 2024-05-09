
//Creating a User Class
class User{
    constructor(username){
        this.username=username
    }
}

class Teacher extends User{ //extends  the inhertance---------
    constructor(username,password,email){
        super(username) //username 
        //super antay a class nunchi 
        //antay manaku ikkada undeydhi user kabbati adhi andhulo velhundhi
        //manaku yem kvalo aa term ni bracket lo rasi tesukoni vastham
        this.password=password,
        this.email=email
    }

    getusername(){
        return ("username",this.username)
    }
}

let instance=new Teacher('cool','12345','cool@gmail.com')
console.log(instance.getusername())