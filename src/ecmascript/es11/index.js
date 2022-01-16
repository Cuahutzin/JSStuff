const button = document.getElementById("btn");
button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
})

// 🔢 Big INT: numbers > 2^53
// 1- Add "n" to enable big int
const aBigNumber = 9007199254740991n;
// 2- BigInt method enable it too
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



// 🤝 Promise All Settled
//waits until all proimises are solved
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// 🌎 Global This
console.log(window);
console.log(globalThis);

// 🔍 null operator
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}