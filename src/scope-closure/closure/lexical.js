
//"we can call Scope as the set of rules that govern how the Engine 
// can look up a variable by its identifier name and find it."

//A lexical environment is kind of scope
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};
//This creates and lexic env.
//myCount = ...  console.log(count++); 
const myCount = buildCount(1);
myCount();
myCount();
myCount();

//this is a new L. Env.
const myOtherCount = buildCount(19);
myOtherCount();
myOtherCount();

