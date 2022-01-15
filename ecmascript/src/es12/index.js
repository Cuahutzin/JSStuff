const string = "JavaScript is wonderful, with JavaScript I can create the future of the web";
const replacedString = string.replace("JavaScript","Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
    get #add(val){
    
    }
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any
//Return the first solved promise
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));




//  🦴 WeakRef(element);
//reference an object, the object avoids the garbage collector
class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    {
        // ...
    }
}

// 🧪 Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = false;
console.log(isTrue3 &&= isFalse3);