// const fruits=['apple','banana','apple','orange','banana'];
// const count=fruits.reduce((acc,fruit)=>{
//     acc[fruit]=(acc[fruit]||0)+1;
//     console.log(acc);
//     return acc;
// },{});
// console.log(count);

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);