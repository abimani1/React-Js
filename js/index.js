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


// const justGet= async ()=>{
//     const response= await fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
//     const data= await response.json()
//     console.log(data);
// }

// call the Function
// justGet()

// var myFunction = {
//     Author: 'my name ',
//     date: '15-12-2012',
//     doSomething: function(){
//         alert("helloworld")
//     }
// };


// console.log(myFunction);
// console.log(myFunction);

// Day-4

// var a=[
//     {id:1},
//     {id:2},
//     {id:3},
// ]
// console.log(a);
// let len=a.length
// console.log(typeof a);
// console.log(a);

// function circle(radius){
//     return{
//         radius,
//         draw:function(){
//             console.log('draw');
//         }
//     };
// }

// const cicr=circle(12)
// console.log(cicr.radius);
// cicr.draw()

// Construction Function

// function Circle(radius){
//     this.radius=radius
//     this.draw=function(){
//         console.log('draw');
//     }
// }

// Circle.call({},1)
// console.log(Circle.call({},1));

// let number={value:10}
// function increase(number){
//     number.value++;
// }
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// increase(number)
// console.log(number);
// console.log(number);

// function retangle(radius,age){
//     this.radius=radius;
//     this.age=age
// }

// const Ret =new retangle(10,23);

// const propertiveName='Center-location';
// Ret[propertiveName]={proto:'sam'};
// Ret.location={x:1};

// console.log(Ret);
// console.log(Ret.center-location);

// for(let key in Ret){
//     console.log(key);
// }

// const perstion={
//     personName:'Kamal',
//     age:'23',
//     display:()=>{
//         console.log(`I am ${personName}, my age is ${age}`);
//     }
// }

// for(let key in perstion){
//     console.log(perstion[key]);
// }

// let student = {
//     id: 12,
//     name: "Isaac",
//     marks: 81,
//     setMarks: function(newMarks){
//         if(isNaN(newMarks)){
//             throw new Error(`${newMarks} is not a number`)
//         }
//        this.marks = newMarks
//     }
// }
// console.log(student.marks);
// student.setMarks(99)

// console.log(student.marks);

/* VM563:7 Uncaught Error: Eighty Five is not a number
    at Object.setMarks (<anonymous>:7:10)
    at <anonymous>:1:9
*/

// function squareArray(){
//     let data = [1,2,3,4,5,6]
//     function square(){
//         for(let i = 0; i<data.length;++i){
//             data[i]=data[i]*2
//         }
//         return data
//     }
//     return square;
// }

// let sq = squareArray()
// let squaredArray=sq()
// console.log(squaredArray)
// [2,4,6,8,10,12]

// Day-5 

// Task-1

// const a=['1','2','3','4','5','4']

// for(let i=0;i<a.length;i++){
//     // console.log(a[i]);
//     for(let j=i+1;j<a.length;j++){
//         // console.log(a[j]);
//         if(a[i]==a[j]){
//             console.log(`Answer ${a[i]}`);
//         }
//     }
// }

// const a=[]
// let n=prompt('Enter the Size of the Array')
// arrInsert(n,a)
// checkArr(a)


function checkArr(arr){
    for(let i=0;i<arr.length;i++){
            // console.log(a[i]);
            for(let j=i+1;j<arr.length;j++){
                // console.log(a[j]);
                if(arr[i]==arr[j]){
                    // console.log(`Answer ${arr[i]}`);
                }
            }
        }
}

function arrInsert(n,arr){
    for(let i=0;i<n;i++){
        let m=prompt(`Array Size ${n}. Enter the value in index ${i+1}`)
        arr[i]=m
    }
    // return console.log(arr);
}


// let b=647
// const patten=/d/
// console.log(patten.test(b));

let arr=[1,2,3,4,5]

const reverse=()=>{
for(let i=arr.length-1;i>=0;i--){
    //  console.log(arr[i])
}
}
// Reverseing string
reverse()

const minmumValue=()=>{
    
}



function human(name){
    return function(){
        // console.log(`Hai i am ${name}`);
    }
}

// const a=human()
// a.sayHai()
// a.showYourfeeling()

const a=human('manikandan')

a()


	let name = "Abhijit";
	var sector = "Government";
    // console.log(sector);
	
	{
	let name = "Souvik";
		
	// as `var` is NOT block scoped(globally s
	// coped here), it'll update the value
	let sector = "Private";
	// console.log(name); //Souvik
	// console.log(sector); //Private
	}
	
	// console.log(name); //Abhijit
	// console.log(sector); //Private

const arrs=[76,7,44,23,4]

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) break;
        
    }

    return arr
}
// console.log(bubbleSort(arrs));

// Remove the dublection in array

const arrRemove=[23,43,44,44,54]

function findDuplication(arr){
    for(let i=0;i<arr.length;i++){
        for(let key in arr){
            if(arr[i]==arr[key]){
                arr
            }
        }
        return arr
    }
}

// console.log(findDuplication(arrRemove));

// var m=[3,[4,2],[5],9,7]
// for(let i=0;i<m.length;i++){
//     if(m[i].length!==undefined){ 
//        for(let k=0;k<m[i].length;k++){
//         let len=i+k
//         m[len]=m[i][k]
//         console.log(m);
//         // len+1
//         lo
//         console.log('len',len);
//        }
//     }
// }

// console.log(m);

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

var m=undefined
console.log(m);
console.log(m=5);


var id=9
var quantity=10
var element = {}, cart = [];
element.id = id;
element.quantity = quantity;
cart.push(element);
console.log(cart);

const numbers = [1, 2, 3, 3, 3, 3, 2, 1];
const target = 3;

var i = 0;
while (i < numbers.length) {
  if (numbers[i] === target) {
      numbers[i]=-1
  } else {
      ++i;
  }
}

console.log(numbers); 