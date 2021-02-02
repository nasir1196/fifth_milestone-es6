class Parent {
    constructor() {
        this.parentName = "Schwerznegger"
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.parentName;
    }
}
const childName = new Child("Arnold");
const child2 = new Child('Tom');
console.log(child2.getFullName());
console.log(childName.getFullName());

