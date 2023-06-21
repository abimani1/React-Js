const pluseFive=(number)=>{
  return console.log(number+5);
}

let f=pluseFive;

// pluseFive(3);

f(10)

const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 5); 


const arrayOfNumbers = [1, 2, 3, 4,90];
arrayOfNumbers.forEach(number=>{
  console.log((number));
})

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  console.log(`pre ${accumulator}`);
  console.log(`next ${currentValue}`);
return accumulator + currentValue;
});

console.log(sum);

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
return n > 5;
})
filteredArray.forEach(number=>{
  console.log(number);
});

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];


// add string after each final participant
const announcements = finalParticipants.map(member => {
return member + ' joined the contest.';
})
console.log(finalParticipants);
announcements.forEach(member=>{
  console.log(member);
});

// setTimeout(()=>console.log('First'),10000)

// setTimeout(() => console.log('Second'), 5000);

// setTimeout(()=>console.log('Third'),8000)

class Car { 
  /* Properties and Actions */
  car(){
      
  }
}
let figo = new Car(); 
console.log(typeof Car);            // function
console.log(typeof figo);           // object
console.log(figo instanceof Car);   // true

//   OOP

const persons = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName () {
    return this.firstName + " " + this.lastName+" "+this.id+" "+this.age
  },
  age:"29"
};

console.log(persons.fullName());

const person = {
  firstName: "Nick",
  lastName: "Anderson",
  age: 35,
  sex: "M"
}

const { firstName: first, age, city = "Paris" } = person;

// console.log(firstName);

const alien1 = {
  name: "Ali",
  species: "alien",
  phrase: () => console.log("I'm Ali the alien!"),
  fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
console.log('hai OOP"s"');
// console.log(alien1);
// console.log(alien1.phrase());
alien1.phrase()
alien1.fly()
console.log(alien1.species);


class Alien { // Name of the class
// The constructor method will take a number of parameters and assign those parameters as properties to the created object.
constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}
// These will be the object's methods.
fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
sayPhrase = () => console.log(this.phrase)
}

class Bug {
constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "bug"
}
hide = () => console.log("You can't catch me now!")
sayPhrase = () => console.log(this.phrase)
}

class Robot {
constructor (name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "robot"
}
transform = () => console.log("Optimus prime!")
sayPhrase = () => console.log(this.phrase)
}

const aliens=new Alien("Kamal","He was the alien")
aliens.sayPhrase()

class Enemy {
constructor(power) {
    this.power = power
}

attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class AlienBack extends Enemy {
constructor (name, phrase, power) {
    super(power)
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}
fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
sayPhrase = () => console.log(this.phrase)
}

const callalien=new AlienBack("Sam","I am out for the earth",34)

callalien.attack()
console.log(callalien.power);


()=>Object.keys(source).every


const firstName="Hai"
console.log(firstName);
console.log(typeof firstName);
const secondNamr=new String("Hsi")
console.log(secondNamr)
console.log(typeof secondNamr);
console.log(firstName.repeat(6));
//  console.log(Date());
const now=new Date()
console.log(typeof now);
console.log(now.getDay());

//Refference
const orders=[
{id:1,name:"sam",depathment:"CS"},
{id:2,name:"Kanna",depathment:"Tamil"},
{id:3,name:"Kamal",depathment:"Bio"},
]

console.log(orders);

let reslut=orders.find(function(order){
return order.depathment===Bio
})

console.log(reslut);

// api call

const axios=require('axios')
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));