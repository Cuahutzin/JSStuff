var hello  = 'Hello';
// var hello = 'Hello +';//bad practice, this override the first assignment 
let world = 'Hello World';
const helloWorld='Hello World';
// let world='Hello world+';//not possible

const anotherFunction=()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//This is a bad practice, a global var should not ve reassigned inside a function
const helloWorld2 =()=>{
    globalVar = 'im global'
}

helloWorld2();
console.log(globalVar)

//Another bad practice
const anotherFunction = () =>{
   var localvar = globalVar = 'im global'
}
    
anotherFunction();
console.log(globalVar)