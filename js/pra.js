// // // // // a=
// // // // // let b=5
// // // // // c=9
// // // // let h=4
// // // // const j=8
// // // // var g=4
// // // // function add(){ //var a & c and let b=5
// // // //     var a=4
// // // //     let b=5
// // // //    var g=3
// // // //     const j=4
// // // //     if(a==4){ //let b=6
// // // //         const j=6
// // // //         let b=6
// // // //         var c=8
// // // //         // console.log('inside of the condtion',a);
// // // //         // console.log('inside of the condution B',b);
// // // //         // console.log(j);
// // // //     }
// // // //     // console.log('outside B',b);
// // // //     // console.log(c);
// // // //     // console.log(h);
// // // //     console.log(g);
// // // //     // return g
// // // //     // console.log(j);
// // // // }
// // // // g=add()
// // // // console.log('g',g);




// // // // // string method



// // // // // let c=text.split(" ")
// // // // // console.log( c.filter(value=>{
// // // // //     let b="mani"
// // // // //     return b==value
// // // // // }).join(" "));

// // // // // let a="  hai  "
// // // // // console.log(a.length);
// // // // // a=a.trimEnd()
// // // // // console.log(a.length);

// // // // // console.log(text.split(""));

// // // // // console.log(text.replace("mani","Manikandan"));
// // // // // console.log(text.concat("Kandan"))
// // // // // let s="7.87"
// // // // // // Number()
// // // // // console.log(typeof s);

// // // // const a=["apple","bannana","mango"]
// // // // a.shift()
// // // // // console.log(a.pop());
// // // // console.log(a);

// // // // // let b="jary"
// // // // // a.push(b)
// // // // // console.log(a);
// // // // // a.unshift("hao")
// // // // // console.log(a);

// // // // // delete a.pop([1])
// // // // // console.log(a);

// // // // // a.splice(0,1)
// // // // // console.log(a);

// // // // let text="hai i am mani mani"
// // // // let text2="your the mani"

// // // // let textArr=text.split(' ')
// // // // let textArr2=text2.split(' ')

// // // // console.log(textArr.filter(value=>{
// // // //     return textArr2.includes(value)
// // // // }));

// // // // let b=[1,2,3,4,1]
// // // // let c=[4,3,67,88]
// // // // let d=[]
// // // // textArr.forEach((value)=>{
// // // //     for(let value2 of textArr2)
// // // //         if(value2==value){
// // // //             d.push(value2)
// // // //         }
// // // // })
// // // // console.log('d',d.join(' '));

// // // // let value=b.some(value=>{
// // // //     return value==0
// // // // })
// // // // console.log(value);
// // // // // console.log(textArr.);
// // // // const res=[]
// // // // for(let i=0;i<textArr.length;i++){
// // // //     if(textArr.indexOf(textArr[i]!==textArr.lastIndexOf(textArr[i]))){
        
// // // //             // console.log(textArr[i]);
        
// // // //     }
// // // // }
// // // // // console.log(res.join(" "));

// // // // // console.log(textArr.lastIndexOfindexOf([1]));

// // // // let arr=text.toLowerCase().split(' ').sort().join(' ')

// // // // // console.log(arr.length);


// // // // const numbers = [45, 4, 9, 16, 25];
// // // // let txt = "";
// // // // // numbers.forEach(myFunction);

// // // // // function myFunction(value, index, array) {
// // // // //   txt += value + "<br>";
// // // // // }

// // // // // console.log(typeof txt);

// // // // // function outter(){
// // // // //     var outterValue=4

// // // // //     var inner= ()=>{
// // // // //         console.log(outterValue+1);
// // // // //     }
// // // // //    return inner()
// // // // // }

// // // // // console.dir(outter());
// // // // // outter()

// // // // // function getWeather(){
// // // // //     return new Promise(function(resolve,reject,value){
// // // // //         resolve("Good")
// // // // //         reject("Error")
// // // // //     })
// // // // // }

// // // // // function Onresolver(data){
// // // // //     console.log('Running',data);
// // // // // }
// // // // // function Onreject(error){
// // // // //     console.log('throw error',error);
// // // // // }
// // // // // getWeather().then(Onresolver,Onreject,2)

// // // // // let f=[1,2,3,4,5]
// // // // // let va=f.toString();
// // // // // console.log( typeof va);
// // // // // console.log(Number(va));
// // // // // console.log('f',Math.max(Number(va)));


// // // // // reversing the array

// // // //     var a=[4,5,6,7,4]
// // // //     // let b=[4,5,1,89]
// // // //     console.log('reversing the array',a.reverse());

// // // // // Finding the Max and Min value
// // // //     let sort=a.sort()
// // // //     console.log('Min number',sort[0]);
// // // //     console.log('Max number',sort[sort.length-1]);
// // // //     console.log('Second largest number',sort[sort.length-2]);

// // // // // remove the Duplicat in array
// // // //     let value=a.filter((item,index)=>(a.indexOf(item)==index))
// // // //     console.log(value);

// // // // // finding the sum of the element in the array
// // // //  let sum=a.reduce((next,prv)=>{
// // // //     return next+prv
// // // //  })

// // // //  console.log(sum);

// // // // //  rotate an array by a given number of steps to the right.
// // // // let arr=[1,2,3,4,5]
// // // // console.log(arr[4]-arr[3]);

// // // // function rorateRigth(n,arr){
// // // //     for(let i=0;i<n;i++){
// // // //         let last=arr.pop()
// // // //         arr.unshift(last)
// // // //     }
// // // // // console.log(arr);
// // // // }

// // // // function rorateLeft(n,arr){
// // // //     for(let i=0;i<n;i++){
// // // //         let last=arr.shift()
// // // //         arr.push(last)
// // // //     }
// // // //     return arr
// // // // }

// // // // arr=rorateLeft(2,arr)
// // // // console.log(arr);
// // // // // rorateRigth(3,arr)

// // // // //check if an array is sorted in ascending order

// // // // function arraySortedOrNot(arr, n)
// // // // {
	
// // // // 	if (n == 1 || n == 0)

// // // // 		return 1;

// // // // 	if (arr[n - 1] < arr[n - 2])
// // // // 		return 0;

// // // // 	return arraySortedOrNot(arr, n - 1);
// // // // }

// // // // let arrs = [ 8,1,9,4,2 ];
// // // // let n = arrs.length;
// // // // console.log('length',n);

// // // // if (arraySortedOrNot(arrs, n) != 0)
// // // // 	console.log("Array was Sorted");
// // // // else
// // // // 	console.log("Array is not Sorted");

// // // // // function to remove a specific element from an array without using the built-in `splice` method
// // // // a=[4,3,7,6,3,43]
// // // // let removeElement=3
// // // // var lastData=a.filter(value=>{
// // // //     return value!=removeElement
// // // // })

// // // // console.log(lastData);

// // // // // Given two arrays, find the intersection (common elements) between them

// // // // // let arry=[45,55,65,3,1]
// // // // // let arr2=[45,65,23,98]
// // // // // let text1="hai i am Mani"
// // // // // let text2="heyyy your are the mani Rigth"
// // // // // var text

// // // // // let commonElement=arry.filter((value)=>{
// // // // //     return arr2.includes(value)
// // // // // })

// // // // // console.log('common',commonElement);

// // // // // const ar1=[1,2,3,4]
// // // // // const ar2={id:2,name:'sam'}
// // // // // console.log(++'10' + 7);
// // // // // const [one,two,three]=ar1
// // // // // // arr3.push(ar1)
// // // // // // arr3.push(ar2)
// // // // // // console.log(arr3);
// // // // // // console.log(arr3);
// // // // // console.log(one,two);

// // // // let float=3.8

// // // // console.log(Math.round(float));

// // // // const obj1 = { a: 1, b: 2 };
// // // // const obj2 = { c: 3, d: 4 };
// // // // const newObj ={ ...obj1, ...obj2 };
// // // // console.log(newObj)

// // // // const settings = { color: "blue", size: "medium" };

// // // // // Destructuring assignment with default values and renaming
// // // // const { color, size = "small", font: typography = "Arial" } = settings;

// // // // console.log(color); // Output: "blue"
// // // // console.log(size); // Output: "medium" (default value overridden)
// // // // console.log(typography); // Output: "Arial" (property renamed)



// // // // // sums(23)

// // // // var sums=(number)=>{
// // // //     console.log('Calling the Arrow Function',number+2);
// // // // }

// // // // // function sums (number){
// // // // //     console.log('Function Declaration',number+1);
// // // // // }


// // // // function outerFunction() {
// // // //     var outerVariable = 5;
  
// // // //     function innerFunction() {
// // // //     //   var innerVariable = outerVariable;
// // // //       console.log(outerVariable); // Accessible: outerVariable is in the lexical scope
// // // //     }
  
// // // //     innerFunction();
// // // //   }
  
// // // // console.dir(outerFunction)


// // // function fib(n,preValues=[]){
// // //     console.log(preValues)
// // //     if(preValues[n]!=null){
// // //         return preValues[n]
// // //     }
// // //     let result
// // //     if(n<=2){ //0,1,1,2
// // //         return 1
// // //     }else{
// // //         result=fib(n-1,preValues)+fib(n-2,preValues)
// // //     }
// // //     preValues[n]=result
// // //     return result
// // // }

// // // console.log(fib(4))


// // // function calculateVolume(length) {
// // //     return function (breadth) {
// // //         return function (height) {
// // //             return length * breadth * height;
// // //         }
// // //     }
// // // }
// // // console.log(calculateVolume(4)(5)(6));
// // // console.dir(calculateVolume());
  

// // let a="mada"
// // // let b="Big"
// // // console.log(a.charAt(0));
// // // console.log(a.split(' '));
// // let letters=a.split("")
// // // let revers=letters.reverse()
// // // let toChange=revers.join('')
// // const repeatedLetters = letters.filter((letter, index) => {
// //     return letters.indexOf(letter) != index;
// //   });
// //   console.log(repeatedLetters.join(' '));

// // // for(let element in sp){
// // //     var count
// // //     for(let i=count;i<a.length;i++){
// // //     if(sp[element]==a.charAt(element))
// // //     {
// // //         console.log(a[element]);
// // //         count++
// // //     }
// // // }
// // // }


// // function addDynamic(arr,index,value,r){
// //   let remove =r
// //   if(remove===undefined){
// //     remove=0
// //   }
// //   arr.splice(index,remove,value)
// // }

// // let arr=[1,2,3,[4,5]]
// // arr[3].push(9)
// // // console.log(arr);
// // // arr.splice
// // addDynamic(arr,0,20);
// // // console.log(arr);
// // // arr.slice

// // const  array1={0:'1',1:'mani',length: 3}

// // array1[Symbol.iterator]=function *(){
// //   for(let i=0;i<this.length;i++){
// //     yield this[i]
// //   }
// // }

// // // console.log([...array1]);

// // // // array1.push(10)
// // // const shallowCopy=Array.from(array1)

// // // const deepCopy=JSON.parse(JSON.stringify(array1))
// // // // array1.push(40)
// // // array1.forEach((value)=>{
// // //   if(value<4){
// // //     console.log(value);
// // //   }
// // // })
// // // console.log(array1);
// // // console.log('Shallow Copy',shallowCopy);
// // // console.log('Deep Copy', deepCopy);

// function web(){
//   this.url="www.google.com"
//   this.display=function(){
//   console.log(this.url)
//   }
// }

// const obj={
//   url:"www.google.com",
//   display(){
//   console.log(this.url)
//   }
// }

// const cobj=new web()
// const cobj2=new web()
// cobj.display()
// cobj2.display()
// cobj2.url='www.wwe.com'
// cobj2.display()
// cobj.display()
// cobj2.display()
// obj.display()
// obj.url='www.facsbook.com'
// obj.display()
// obj.display()


// const obj1 = {};
// const obj2 = { a: 1, b: { c: 2 } };
// const isEmpty=Object.keys(obj1).length===0
// console.log(isEmpty)

// const obj3={
//   name:'mani',
//    display(){
//     return console.log(this.name);
//   },
//   set change(Newname){
//     this.name=Newname
//   }
// }

// obj3.__proto__.age='kamal'

// console.log(obj3);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}!`);
};


const person1 = new Person("John", 25);
person1.sayHello(); // Output: Hello, my name is John!