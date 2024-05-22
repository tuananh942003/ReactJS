//  import{ sum} from './math.js'
//  function sayHello (x){
// let a=2
// let b=9
// const result=a*x + b;
// console.log(result);
// return result;
// }
// let resultSayHello = sayHello()


// //arrow function
// const sayHi =(x,y,z) => ({name : 'Mindx'})
// const result = sayHi (2);
// console.log(result);



// //template literal
// // duoc sinh ra phuc vu noi chuoi hay xu ly chuoi voi bien (gia tri)
// const user = "Mindx"


// console.log("Module")
// const resultSum = sum(1,2)
// console.log(resultSum)
   


// //=======
// console.log("===== Toán Tử 3 Chấm=====")
// const listNumber =[ 1,2,3]
// console.log(...listNumber)


// const  tmp = [...listNumber,2,2,3,5]
// console.log(tmp);  



// bài tập 
// function bai1(a){
//     return a*a
// }
// let mathResult = (a) => {
//     return a*a
// } 
// let mathResult = a =>a*a
// let mathResult = (a) => (a*a)


// bài 2 
// let result = (text,word) =>{
// // return text.includes(word)
// let result = text.indexOf(word)
// return text.indexOf(word)  !== -1
// }
// console.log(result("Hello world","World"));




// //// bai3
// let addPrefix = (arr,prefix)=>{
//     let result []
//     for(let i=0;i<arr.length;i++){
//         let word = prefix + " :" + arr[i];
//         result.push(word);

//     }
//     return result
// }
// console.log(addPrefix(["One","Two","Three"],"Number"))



///bai 4
// let doubleValues = (arr) =>{
//     let result= []
//     for(let i=0;i<arr.length;i++){
//         let num = 2 * arr[i]
//         result.push(num)
//     }
//     return result
        


// }
// console.log(doubleValues(["3","4","5","6"]))
    

//bai 5
// let sole = (arr)=>{
//     let result = [];
//     for(let i=o;i<arr.length;i++){
//         if(arr[i]%2 !==0){ 
//         }
//     }
//     result.push(arr[i])
// }


//bai 6
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
let countWorkingDay = (employees)=> {
    let result = 0
    for (let i=0;i<employees.length;i++){
        result +=employees
    }
}





