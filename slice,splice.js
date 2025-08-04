// const arr =[10,30,40,20,50];
// console.log("og array",arr);

// const newArr =arr.slice(1);
// console.log("newarr",newArr);

// console.log("after slice",arr)

// const Arr =arr.slice(1,4)
// console.log("Arr:",Arr)

// const revindex =arr.slice(4,1)
// console.log(revindex)

// const negindex =arr.slice(-3)
// console.log(negindex)

// const arr =[10,30,40,20,30];
// console.log("Original array",arr);

// const newArr = arr.splice(1,2, 60);
// console.log("after splice",newArr);

// console.log("original",arr);

// function addNum(num1,num2)
// {return(num1+num2);
// }
// console.log(addNum(10,20));

// const person = {
//     name:"yuvraj",
//     age: 18,
//     greet: function greeting() {
//         console.log(this);

//         return`hello,my name is ${this.name}`;

//     }    }
// console.log(person.greet());

// function addNum(num1,num2){
//     let result=num1+num2;
//     return result;
// }
// console.log(addNum(10,20));

// const showArgs=(...args)=>(args)
// console.log(showArgs(10,20,30));

// const arr=[1,2,3,4,5,6,7,8,9];

// for (const num of arr){
//     if(num>4){
//         console.log(num);
//     }
// }
// console.log(arr)

// const arr=[1,2,3,4,10,20,5,50];
// const newArr=[];

// for(const element of arr){
//     if(element>4){
//         newArr.push(element);
//     }
// }
// console.log(newArr);

// const arr=[1,2,3,4,10,20,30];
// const newArr=arr.filter((val)=>(val>4));
// console.log(newArr);

// const strArr=["yuvraj","ankit","piyush","aman"];
// const result=strArr.filter(str=>str.length>5);
// console.log(result);

// const arr=[1,2,3,4,5,6];
// const newArr=arr.map((val)=>(val*10));
// console.log(newArr);

// const stringArr=["ankit","yuvraj","arman","ankush"];
// const newstring=stringArr.map((val)=>(val.toUpperCase()));
// console.log(newstring);

const studentInfo={
    userName:"yuvraj",
    age:18,
    isLoggedIn:true
}
console.log(typeof studentInfo);
console.log(typeof {});
