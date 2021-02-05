const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function () {
        console.log(`${this.firstName}  ${this.lastName}`);
    },
    getAmount: function (amount) {
        this.salary -= amount;
        return this.salary;
    }
}
normalPerson.getFullName();
normalPerson.getAmount(500);
normalPerson.getAmount(1000);
console.log(normalPerson.salary);
