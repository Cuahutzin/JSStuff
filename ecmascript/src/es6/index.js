//OLD WAY
function newFunction(){
    var name = name || 'oscar';
    var age = age || 32;
    var country  = country || 'MX';
}
//ES6
function newFunction2(name = 'oscar',age = 54, country = 'CO'){
    console.log(name, age, country);
}


newFunction2();
newFunction('Eduardo', 32,'MX');

//template literals
let hello = "Hello";
let world = "World";
let epucPhrase = hello + ' ' + world;

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multiple lines
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, \n" 
+"consectetur, adipisci velit..."

let lorem2 = `otra frase epica blablabla
aqui esta el salto de linea`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'fernando',
    'age': 27,
    'country': 'MX'
}

console.log(person.name,person.ag);

let {name, age, country} = person;
console.log (name, age);


//propagation operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

// var is global let is avaiable in the scope

var x = 'b';
x = 'a';

console.log(x);
const a = 'b';
a = 'a';

console.log(a);

//Object parameters
let name = 'oscar';
let age = 32;
//es5
obj ={name : name, age:age};
//es6
obj2 ={name, age};

console.log(obj2);


//arrow ( tat is an anonym function)
const names = [
    {name: 'Oscar', age:32},
    {name : 'Jessica', age:27}
];

let listOfNames = anmes.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item=> console.log(item.name));

const listOfNames3 = (name,age,country) => {
 // ...
}
const lisOfNames4 = name=> {
//...
}

const square = num => num*num;

//Promises
const helloPromise = () =>{
    return new Promise ((resolve, reject) =>{
        if (true){
            resolve('Hey!');
        }
        else{
            reject('Ups!!!');
        }
    })
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error=> console.log(error));



//Classes
class calculator{
    constuctor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modules
// import hello from './module';
// hello();

const hello = require('./module');
console.log(hello());

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
}

const generatorHello = helloWorld ();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


