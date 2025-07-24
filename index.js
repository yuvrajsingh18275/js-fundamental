let x="yuvr aj"
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// console.log(x.indexOf("u"))
// console.log(x.charAt("2"))
//  console.log(x.trim(),'Hii')
// console.log(x.trimStart(),'Hii')
// console.log('Hii',x.trimEnd())
// if (x.includes("han")){
//     console.log("Found han");
// }else{
//     console.log("no han")
// }
// console.log(x.startsWith(' '))
// console.log(x.endsWith(' '))
// console.log(x.slice(4))
// console.log(x.replace("yuv","yam"))
// console.log(x.replaceAll("r","s"))
// const statementArray = [
//     "Is these christmas?",
//     "Yayy! its early",
//     "Is it christmas really!",
//     "No its not the christmas",
//     "Last month of the year have christmas",
//     "Till then finish Javascript"
// ]
// function print_christmas_statement(statementArray){
//     for(const i in statementArray){
//         if(statementArray[i].includes("christmas")){
//             console.log(statementArray[i])
//         }
//     }
// }
// print_christmas_statement(statementArray)
// const a=[1,2,3,4,5,6,7,8];
// console.log(a.push (6))
// a.push(12)
// a.pop(3)
// console.log(a.unshift(6))
// console.log(a.shift())

// var a="hi-hello-namaste-okay-goodbye"
// var lang=a.split("=")
// console.log(lang)
// lang.join("+")
// console.log(lang)

// const week=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// console.log(week)
// console.log(week.splice(1,5))
// console.log(week.splice(1,1"Meow"))
// console.log(week)
// const person={
//     name:["yuvraj","ankit"],
//     age:18,
// };
// console.log("This is test name" + person.name[0]
// +" "+"This is age"+person.age
// )
// console.log(`This is test name  ${person.name[0]}
// This is age ${person.age}`)

function handler(value,i){
    if(+value %2===0)return value
    else return"odd"
}
const arr=["2666","2777","2888"]
const newarr=arr.map(handler)
console.log(newarr)