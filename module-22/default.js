// function addToDo(num1, num2) {
//     if(num2===undefined){
//         num2=0;
//     }
//     return num1 + num2;
// }
// const result=addToDo(13);
// console.log(result);

function addToDoSetValue(num1, num2=0) {
    
    return num1 + num2;
}
const result1=addToDo(13,15);
console.log(result1);

function addToDoSingleValue(num1, num2=0) {
    
    return num1 + num2;
}
const result2=addToDo(13);
console.log(result2);