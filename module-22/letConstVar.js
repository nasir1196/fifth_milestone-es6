const names = "Anu";
//name='Anupoma'; //const is immutable variable;
console.log(names);
let gfName = "Anupoma";
gfName = "Anupoma Nishat";
console.log(gfName);

const numbers = [25, 34, 23, 43];
numbers[2] = 99;
numbers.push(94);
// numbers=[34,45,32,54,26]; change any value but can not change full array element 
console.log(numbers);
const nayok = { name: "Sharukh Khan", phone: 912546977 };
console.log(nayok);
console.log(nayok.phone);
console.log(nayok.name);
let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
//     console.log(sum, i);
// }
// // console.log(i); let variable always work inside if else function for loop etc. 
// console.log(sum);

let sum1 = 1;
for (let i=1; i <= 10; i++) {
    sum1 = sum1 * i;
    console.log(sum1, i);
}
console.log(sum1);