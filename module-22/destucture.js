const person = { name: "william Watson", age: 24, job: "Facebook", address: 'Canada', gfName: "Shannon", friends: ['Bill Gets', 'Mark Zukerbuge', 'Strive Jobs'], phone: "0171722354" }
// const { name } = person;
// const { gfName } = person;
// const {phone}=person;
// console.log(name, gfName,phone);
const { name, age, job, address, gfName, friends, phone } = person;
console.log(name, age, job, address, gfName, friends, phone);

const friendsName = ['Amir Khan', 'Sharukh Khan', 'Salman Khan', 'Umair Khan', 'Sakib Khan'];
const [friend1, friend2, ...oldFriend] = friendsName;
console.log(friend1, friend2);
console.log(...oldFriend);
console.log(oldFriend);


const stId = {
    name: 'Nasir',
    id: 1227,
    info: {
        address1: "Belkuchi",
        work: "Programming"
    },
    phone: "125475221"
}
const {address1}=stId.info;
console.log(stId);
console.log(address1);