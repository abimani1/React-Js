// Task day-3
// function display() {
//   let value = document.getElementById("message").value;
//   // console.log(typeof value);
//   document.getElementById("show").innerHTML = value;
// }

// function add() {
//   let num1 = parseInt(document.getElementById("number1").value);
//   let num2 = parseInt(document.getElementById("number2").value);
//   // console.log(typeof num1);
//   const sum = num1 + num2;
//   document.getElementById("sum").innerHTML = sum;
// }

// Task day-2

//Task-1

// const student = [
//   {id: "1", name: "sam", age: "22"},
//   {id: "2", name: "kamal", age: "24"},
//   {id: "3", name: "raj", age: "21"},
//   {id:"4",name:"hari",age:"25"}
// ];
// console.log("Task - 1");
// for (let key in student) {
// //     console.log(student[key].age==22)
//     console.log(student[key].age);
// }
// console.log("Display the student age above or equal to 22");
// for (let key in student) {
//     if(student[key].age>=22){
//         console.log(student[key].age);
//     }
//     }

//Task-2

// changing single & same letter

// let strName="Manikandan"
// console.log("Task-2");
// console.log("Change the one letter");
// console.log(strName.replace("a","s"));
// console.log("Change the same letter");
// console.log(strName.replaceAll("a","s"));

// With out method

// for( let i=0;i<strName.length;i++){
    
//     if(strName[i]=="a"){
//        changeletter(i,"s")
//     }

// }

// console.log('With out method');
// console.log(strName);
// function changeletter(postion,newletter){
//     const arr=strName.split('') 
//     arr[postion]=newletter
//     strName=arr
//     strName=arr.join('')
// }

//Task-3

// let pag1='are you bring your bottle'
// let pag2='yes i have a bottle'

// console.log("Task-3");
// console.log(pag1);
// console.log(pag2);

// pag1=pag1.split(' ')
// pag2=pag2.split(' ')

// for(let i=0;i<pag1.length;i++){
//     for(let j=0;j<pag2.length;j++){
//         if(pag1[i]==pag2[j]||pag1[i].toLowerCase()==pag2[j].toLowerCase()){
//             console.log(pag2[j]);
//         }
//     }
// }


/* Day-3 */

// Task-1 --> Api Call


const justGet= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
    const data= await response.json()
    console.log(data);
}

// call the Function
justGet()