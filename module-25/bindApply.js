const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function () {
        console.log(`${this.firstName}  ${this.lastName}`);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary -= amount;
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

const chargeBillHeroPerson = normalPerson.chargeBill.bind(heroPerson);
chargeBillHeroPerson(2000);
chargeBillHeroPerson(2000);
chargeBillHeroPerson(3000);

const chargeBillFriendlyPerson = normalPerson.chargeBill.bind(friendlyPerson);
chargeBillFriendlyPerson(2000);
chargeBillFriendlyPerson(2000);
chargeBillFriendlyPerson(1000);
chargeBillFriendlyPerson(1000)
