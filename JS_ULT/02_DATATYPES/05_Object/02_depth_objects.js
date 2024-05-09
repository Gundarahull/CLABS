//SIngleton OBJECTS

const app=new Object() //its a aingleton Object

const LITERAL={}
app.id=123
LITERAL.name="RAHUK"
LITERAL.id=1234
LITERAL.isloggedin=false
// console.log(app.id);

//nesting the OBJECTS
const regular={
    email:"rahul@gmail.com",
    fullname:LITERAL
}
// console.log(LITERAL);
// console.log(regular.fullname.id);=+

const obj1={
    a:1,
    b:2
}
const obj2={
    c:1,
    d:2
}
//bysuing sprad
const obj3={...obj1,...obj2}
// console.log(obj3);

//assign
const obj4=Object.assign({},obj1,obj2)
// console.log(obj4);
// console.log(Object.keys(obj4)); //return array
console.log(Object.entries(obj4));
console.log(obj2.hasOwnProperty('c'))
