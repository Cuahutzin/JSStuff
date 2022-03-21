const username: string = 'Eduardo';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {

  constructor(public age: number, publiclastName: string) {
  }
}

const nico = new Person(15, 'Molina');
nico.age;
