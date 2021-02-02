// class Student{
//     constructor(sId, sName, sAddress){
//         this.id=sId;
//         this.name=sName;
//         this.address=sAddress;
//     }
// }
// const student1=new Student(345,'Antu',"Dhaka");
// const student2=new Student(435,'Sumon','Dhaka');
// console.log(student1.name);
// console.log(student2);

class Student{
    constructor(sId, sName){
        this.id=sId;
        this.name=sName;
        this.address='Dhaka';
    }
}
const student3=new Student(34,'shuvo');
const student4=new Student(56,"Akash");
console.log(student4);
console.log(student3);