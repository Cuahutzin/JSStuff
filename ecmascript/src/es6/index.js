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