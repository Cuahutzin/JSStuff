//the next generates a closure wit the var statement
// the next code use the last value of i
const anotherFunction = () => {
    for ( var i = 0 ; i<10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};
anotherFunction();

//let makes the curren i accessible for the block, for the current loop only.
const anotherFunction = () => {
    for ( let i = 0 ; i<10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};
anotherFunction();