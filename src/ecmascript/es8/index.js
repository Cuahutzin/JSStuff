
//obj.entries return matrix key values

const data ={
    front:'Edd',
    back: 'DarkSideEdd'
};

const entries =Object.entries(data);
console.log(entries);
console.log(entries.length);


//Objetc Values: Return object key values to an array
const data2= {
    front:'Alej',
    back: 'Rel'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);



// Padding: create a new string based on other string witht a defined length
// you can select a string to fill the empty spaces at beggining on end 

const string ='hello';
console.log("{"+string.padStart(7,'hi')+"}");
console.log("{"+string.padEnd(12,'hi')+"}");


//Trailing commas,
const data3= {
    front:'Alej', 
    back: 'Rel',//could  exist another element, or not
}

//Async and await
const helloWorld = () =>{
    return new Promise ((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve("Hello World"), 3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();