class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroBalam = new Person('Hero', 'Balam', 20000);
console.log(heroBalam);
const heroFriendly = new Person('Hero', 'Akkas', 25000);
console.log(heroFriendly);


// try to old model Object systems 
function Person1(first, last, salary) {
    this.firstName = first;
    this.lastName = last;
    this.salary = salary;
}
const oldPerson = new Person1('Gran', 'Papa', 1500);
console.log(oldPerson);