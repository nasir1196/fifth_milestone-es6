// function getNum(num){
//     return num*2;
// }
// const numbers=getNum(55);
// console.log(numbers);

// function getNum(x, y) {
//     const addNum = x + y;
//     const diffNum = x - y;
//     return addNum * diffNum;
// }
// const numbers = getNum(7, 5);
// console.log(numbers);

// const doubleIt=function(num){
//     return num*2;
// }
// const result=doubleIt(5);
// console.log(result);

// const add=(num)=>num*2;
// const add= ()=>5;
// const add=(x,y)=>x+y;
const added=(x,y)=>{
    const double=x+y;
    const diff=x-y;
    const result=double*diff;
    return result;
}
const add=added(12,10);
console.log(add);
