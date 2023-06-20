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

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName () {
      return this.firstName + " " + this.lastName+" "+this.id+" "+this.age
    },
    age:"29"
  };

console.log(person.fullName());

let x=this
console.log(x);
console.log(window);