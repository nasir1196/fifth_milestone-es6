const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function () {
        console.log(`${this.firstName}  ${this.lastName}`);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary -= amount + tips + tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}


const friendlyPerson = {
    firstName: "Hero",
    lastName: "Friend",
    salary: 20000
}

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 300]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [4000, 400, 40]);
console.log(friendlyPerson.salary);