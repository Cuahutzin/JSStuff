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





