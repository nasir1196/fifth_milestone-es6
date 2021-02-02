const age=[34,45,32,43,23,65];
const age2=[56,76,45,34,28,97,54];
const age3=[76,45,65,76];
const allAges=age.concat(age2).concat([5,6]).concat(age3);

// spread operator 
const allAges2=[...age,...age2,...age3];
console.log(allAges2);

const business=450;
const minster=350;
const sochib=250;
const maximum=Math.max(business,minster,sochib);
console.log(maximum);


// spread operator
const takaPoisa=[456,654,643,765,894];
const maximum2=Math.max(...takaPoisa);
console.log(maximum2);