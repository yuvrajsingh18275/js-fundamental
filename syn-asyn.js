// console.log('start');
// setTimeout(() => {
//     console.log('Timers');
// }, 5000)

// console.log('end');

// let count=0;
// const timer=setInterval(()=>{
//     console.log("A A A");
//     count++
//     if(count>10){
//         console.log("aman");
        
//     }
//     else if(count==11)
//     {
//         clearInterval(timer);
//     }
// },1000)

function greet(callback){
    console.log("hello world");
    callback();
}

function saybye(){
    console.log("goodbye");
}

greet(saybye);