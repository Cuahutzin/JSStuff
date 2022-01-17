// "hoisting: levantamiento de las declaraciones"
// The hoisting elevates the declares statements, like var a
// So, the below code is converted to:
/*

var a;
a = 2
 
//a = 2 has no declaration, so it's moved below the declaration
*/
a = 2;
var a;
console.log(a); //2

//The next two lines only with return an undefine value at running console.log ...
console.log(a);
var a = 2;

//Hoisting is only used on the declarations instead of initializations
// the  function declaration is moved above the calling, this is why we can use functions before declare them
nameOfDog('Elmo');
function nameOfDog (name) {
    console.log(name);
}
