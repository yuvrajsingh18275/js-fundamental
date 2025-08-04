// function greet(){
//    return new Promise((resolve,reject)=>{
//     resolve("hello world");
//    })
// };

// console.log(greet());

// async function greet(){
//     return"hello world";
// }
// console.log(greet());

// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = false //condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// async function testPromise(){
//     try{
//         const res=await userLoggedInStatus;
//         return res;
//     }catch(error){
//         console.log("error is",error);
//     }
// }
// console.log(testPromise());

console.log("first console")
const backEndurl = "https://jsonplaceholdxzczczvvvzxcvzvcxzer.typicode.com/posts"


async function fetchAPI() {
    try{
    const saved = await fetch(backEndurl)
    const data = await saved.json()
    console.log(data)
}catch(error){
        console.log("Error is:",error);

    }}

fetchAPI()
