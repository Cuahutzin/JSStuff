const helloWorld = ()=>{
    const hello='hello World';
    console.log(hello);
}

helloWorld();
console.log(hello); //we cannot reach this

var scope = 'i am global';

const functionScope = () =>{
    var scope = 'i am just a local';
    const func = () =>{
        return scope
    }
    console.log(func())
}

functionScope()
console.log(scope)