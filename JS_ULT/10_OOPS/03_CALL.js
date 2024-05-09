function username(name){
    this.name=name
    console.log("calling");
}

function cred(user,pass){
    username.call(this,user),    //call----->> holding the refernce and this---giving naavi ani tesuko mava
    this.pass=pass
}

const myobj=new cred('rahul','1234')
console.log(myobj)