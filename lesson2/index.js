// // const arr = [1,2,3,4,5];
// // console.log(arr[2]);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// const newarray = cars.map((value) => {
//   return "Kádasda";
// });

// console.log(newarray);

// const filterarr = cars.filter((value) => {
//   return value === "BMW";
// });

// console.log(filterarr);

// const person = {
//   name: "doraemon",
//   age: 10,
// };

// // console.log(person["name"]);

// //duyet cac phan tu cua doi tuong
// for (const abc in person) {
//   console.log(abc, ":", person[abc]);
// }

// for (const iterator of cars) {
//   console.log(iterator);
// }
// const listPerson = [
//   {
//     name: "doraemon",
//     age: "10",
//   },
//   {
//     name: "nobita",
//     age: "5",
//   },
// ];
// for (let i = 0; i < listPerson.length; i++) {
//   const element = listPerson[i];
//   for (const key in element) console.log(key);
// }
// console.log("=====bai4=====")
// const listNumber =[1,2,3,4];
// const doubleListNumber=listNumber.map((item)=>{
//     return item *2 ;
// });
// console.log(doubleListNumber);



// console.log("=====bai5=====")
// const listNumber =[1, 2, 3, 4, 5, 6]
// const result = listNumber.filter((item)=>{
//     return item % 2 !==0
// })
// console.log(result)
// console.log("=====bai6=====")
// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];
// const result =employees.reduce



// const employees= [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];
// let Max = employees[0].salary;
// let indexMax=0;
// for(let i=0;employees.length;i++){
// const element=employees[i];
// if(element.salary > Max) {
//     Max = element.salary;
//     indexMax = i 
// }

// }
// console.log(employees[indexMax]);







// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let Max = employees[0].workingDays-employees[0].lateDays
// let indexMax=0;
// for(let i=0;employees.length;i++){
// const element=employees[i];
// const work= employees.workingDays-employees.lateDays
// if(work> Max) {
//     Max = element.salary;
//     indexMax = i 
// }

// }
// console.log(employees[indexMax]);






// bai 9
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];
// const result ={

// }
// const listName =employees.map(item => item.name)
// console.log(listName)
// console.log(employees)

// listName.forEach((item,idx)=>{
//         if(!result[item]){
//             result[item]=[]
//         }
//         result[item].push(employees );
//     })
// console.log(result)






//bai 10
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];
// let Max = employees[0].workingDays/employees[0].salary
// let indexMax=0;
// for(let i=0;employees.length;i++){
// const element=employees[i];
// const work= employees.workingDays/employees.salary
// if(work> Max) {
//     Max = element.salary;
//     indexMax = i 
// }

// }
// console.log(employees[indexMax]);
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];
// const result = {}
// employees.forEach((item)=>{
//     if(!result[item.workingDays]){
//         result[item.workingDays]=0;

//     }
//     result[item.workingDays]++;
// })
// console.log(result) 



//bai 12
const employees = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

const result = employees.map(item=> ({
    name: item.name,
    email: item.email,
    workInfo: {
        workingDays: item.workingDays,
        lateDays: item.lateDays
    }
}));

console.log(result);

// bai 13
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
//cau 1 

    const newJob={
    name: "Đọc truyen",
     description: "Đọc xong chương 10", 
     completed: true 
    }
tasks.push(newJob)

console.log(tasks)
// cau 2






