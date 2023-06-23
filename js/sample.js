// const pluseFive=(number)=>{
//   return console.log(number+5);
// }

// let f=pluseFive;

// pluseFive(3);

// f(10)

// const isEven = (n) => {
//   return n % 2 == 0;
// }

// let printMsg = (evenFunc, num) => {
//   const isNumEven = evenFunc(num);
//   console.log(`The number ${num} is an even number: ${isNumEven}.`)
// }

// Pass in isEven as the callback function
// printMsg(isEven, 5); 


// const arrayOfNumbers = [1, 2, 3, 4,90];
// arrayOfNumbers.forEach(number=>{
//   console.log((number));
// })

// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
//   console.log(`pre ${accumulator}`);
//   console.log(`next ${currentValue}`);
// return accumulator + currentValue;
// });

// console.log(sum);

// const randomNumbers = [4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter(n => {  
// return n > 5;
// })
// filteredArray.forEach(number=>{
//   console.log(number);
// });

// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];


// add string after each final participant
// const announcements = finalParticipants.map(member => {
// return member + ' joined the contest.';
// })
// console.log(finalParticipants);
// announcements.forEach(member=>{
//   console.log(member);
// });

// // setTimeout(()=>console.log('First'),10000)

// // setTimeout(() => console.log('Second'), 5000);

// // setTimeout(()=>console.log('Third'),8000)

// class Car { 
//   /* Properties and Actions */
//   car(){
      
//   }
// }
// let figo = new Car(); 
// console.log(typeof Car);            // function
// console.log(typeof figo);           // object
// console.log(figo instanceof Car);   // true

// //   OOP

// const persons = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName () {
//     return this.firstName + " " + this.lastName+" "+this.id+" "+this.age
//   },
//   age:"29"
// };

// console.log(persons.fullName());

// const person = {
//   firstName: "Nick",
//   lastName: "Anderson",
//   age: 35,
//   sex: "M"
// }

// const { firstName: first, age, city = "Paris" } = person;

// // console.log(firstName);

// const alien1 = {
//   name: "Ali",
//   species: "alien",
//   phrase: () => console.log("I'm Ali the alien!"),
//   fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }
// console.log('hai OOP"s"');
// // console.log(alien1);
// // console.log(alien1.phrase());
// alien1.phrase()
// alien1.fly()
// console.log(alien1.species);


// class Alien { // Name of the class
// // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
// constructor (name, phrase) {
//     this.name = name
//     this.phrase = phrase
//     this.species = "alien"
// }
// // These will be the object's methods.
// fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// sayPhrase = () => console.log(this.phrase)
// }

// class Bug {
// constructor (name, phrase) {
//     this.name = name
//     this.phrase = phrase
//     this.species = "bug"
// }
// hide = () => console.log("You can't catch me now!")
// sayPhrase = () => console.log(this.phrase)
// }

// class Robot {
// constructor (name, phrase) {
//     this.name = name
//     this.phrase = phrase
//     this.species = "robot"
// }
// transform = () => console.log("Optimus prime!")
// sayPhrase = () => console.log(this.phrase)
// }

// const aliens=new Alien("Kamal","He was the alien")
// aliens.sayPhrase()

// class Enemy {
// constructor(power) {
//     this.power = power
// }

// attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }


// class AlienBack extends Enemy {
// constructor (name, phrase, power) {
//     super(power)
//     this.name = name
//     this.phrase = phrase
//     this.species = "alien"
// }
// fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// sayPhrase = () => console.log(this.phrase)
// }

// const callalien=new AlienBack("Sam","I am out for the earth",34)

// callalien.attack()
// console.log(callalien.power);


// ()=>Object.keys(source).every


// const firstName="Hai"
// console.log(firstName);
// console.log(typeof firstName);
// const secondNamr=new String("Hsi")
// console.log(secondNamr)
// console.log(typeof secondNamr);
// console.log(firstName.repeat(6));
//  console.log(Date());
// const now=new Date()
// console.log(typeof now);
// console.log(now.getDay());

//Refference
// const orders=[
// {id:1,name:"sam",depathment:"CS"},
// {id:2,name:"Kanna",depathment:"Tamil"},
// {id:3,name:"Kamal",depathment:"Bio"},
// ]

// console.log(orders);

// let reslut=orders.find(function(order){
// return order.depathment===Bio
// })

// console.log(reslut);

// api call

// const axios=require('axios')
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.error(error));

  // Routing the uoin number

  // const a=[]
  // const b=[]
  // let n=prompt('Enter the size of the first array')
  // arrInsert(n,a)
  // display(a)
  // let m=prompt('Enter the size of second array')
  // arrInsert(m,b)
  // display(b)
  // unio(a,b)
  
  // function arrInsert(n,send){
  // for(let i=0;i<n;i++){
  //   let m=prompt(`array size ${n} enter the data in the Index of ${i+1}`)
  //   send[i]=m
  // }

  // return send;
  // return document.getElementById('demo1').innerHTML(a)
// }

// function display(arr){
//     console.log(arr);
// }

// 1 2 3 4 5
// 3 4

// function unio(arr1,arr2){
//   let len1=singleCheck(arr1)
//   console.log('First array size '+len1);
//   let len2=singleCheck(arr2)
//   console.log('Second array size '+len2);
//   let higthSize=len1+len2
//   console.log(higthSize);

//   for(let i=0;i<arr1.length;i++){
//     for(j=0;j<arr2.length;j++){
//       if(arr1[i]==arr2[j]){
//         higthSize-=1
//       }
//     }
//   }
  // singleCheck(arr2)
//   return console.log(`finel ${higthSize}`);
// }

// function singleCheck(arr){
//   let count=[]
  // for(let i=0;i<arr.length;i++){
    // console.log(a[i]);
    // for(let j=i+1;j<arr.length;j++){
        // console.log(a[j]);
//         if(arr[i]!=arr[j]){
//             count[i]=arr[i]
//         }else {
//           count=0
//         }
//     }
// }
// return arr.length-count;
// }


// Factory function

function person(name){
  return {
    take(){
      return console.log(`Hello I am ${name}`);
    }
  }
}

const me=person('Manikandan')

// me.take()

function createElement(type,text,color){
  const el=document.createElement(type)
  el.innerHTML=text
  el.style.color=color
  document.body.append(el)
  return{
    el,
    setText(text){
      el.innerHTML=text
    },
    setColor(color){
      el.style.color=color
    }
  }
}

createElement('center','Hai i am Manikandan hai','blue')
const h2=createElement('h1','Hai i am kamal','red')

// Higher order function --> it was the functioin call or return function eg.arrya method push,filter,ect....

const names=[
  'sam',
  'mani',
  'kamal',
  'ala',
  'abi'
]

// const filteredNames=names.filter(n=>n[0] =='a')
// console.log(filteredNames);

const filtered =[]
for(let i=0;i<names.length;i++){
  if(names[i][0]!==' '){
    filtered.push(names[i])
  }
}

console.log(filtered);

// const element=[]
for(let i=0;i<filtered.length;i++){
  const el=document.createElement('p')
  el.innerHTML=filtered[i]
  document.body.append(el)
  // element.push(el)
}
// console.log(element);

// class persons{
//   talk(){
//     return 'Hai I'
//   }
// }

// const a= new persons()
// const b= new persons()

// person.Prototype.take=function(){
//   return 'New i am so that do not take over to me'
// }

// Class

// parent class

class studentBio{
  constructor(name,mark,age){
    this.name=name;
    this.age=age;
    this.mark=mark
  }
  displayBio(){
    return `Name:${this.name},
            age:${this.age},
            mark:${this.mark}`
  }
}

// chlid class

class exam extends studentBio
{
  constructor(name,mark,age){
    super(name,mark,age)
  }
  
  calculate(){
    // displayBio()
    if(this.mark=='100'){
      // this.displayBio()
      return 'Grade A'
    }else if(this.mark<='65'){
      return 'Grade B'
    }else if(this.mark>='40'){
      return 'Grade C'
    }else{
      return 'Grade F'
    }
  }
}
// const bio=new studentBio('mani','23','19')
const subclass=new exam('kamal','50','18')
console.log(subclass.displayBio());
console.log(subclass.calculate());

// class student{
//   constructor(name,e1,e2,e3){
//     this.name=name
//     this.e1=e1
//     this.e2=e2
//     this.e3=e3
//   }

// }

// class exams extends student{
//   constructor(name,e1,e2,e3){
//   super(name,e1,e2,e3)
//   }
  
//   totlaMark(){
//     let sum=this.e1+this.e2+this.e3
//     return sum
//   }
//   examGrade(){
//     let mark=this.totlaMar
//     if(mark=='100'){
//       // this.displayBio()
//       return 'Grade A'
//     }else if(mark<='65'){
//       return 'Grade B'
//     }else if(mark>='40'){
//       return 'Grade C'
//     }else{
//       return 'Grade F'
//     }
//   }
// }

// const data=new exams('Mani',27,33,40)
// console.log(data.totlaMark());
// console.log(data.examGrade());

// Using a constructor
function person(first_name, last_name) {
	return {
    first_name,
    last_name,
    display(){
      return `${this.first_name} ${this.last_name}`
    }
  }
}
// Creating new instances of person object
let person1 = new person('Sam',' raj');

console.log(person1.display());

