// Lecture: Classes

// ES5
var Person5 = function(name, yearOfBirth, job){
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher')
console.log(john5)
console.log(john5.calculateAge())

// ES6

class Person6 {
  constructor (name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calculateAge6(){
    var age6 = new Date().getFullYear() - this.yearOfBirth
    console.log(age6)
  }
  static greeting(){
    console.log('Hey there!')
  }
}
const john6 = new Person6('John6', 1995, 'Teacher')

console.log(john6)
Person6.greeting()

// 12 - Lecture: Classes with Subclasses



// ES5 - Usando o Person5 como super class
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
  Person5.call(this, name, yearOfBirth, job)
  this.olympicGames = olympicGames
  this.medals = medals
}
Athlete5.prototype = Object.create(Person5.prototype)

var johnAthlete5 = new Athlete5('Jonas', 1974, 'swimmer', 3, 10)
console.log('Athlete5', johnAthlete5)
johnAthlete5.calculateAge()

// Adding methods to Athlete 5
Athlete5.prototype.wonMedal = function(){
  this.medals++
  console.log(this.medals)
}
johnAthlete5.wonMedal()

///////////////////////////////////////////////////////////////

// ES6
class Athlete6 extends Person6 {
  constructor (name, yearOfBirth, job, olympicGames, medals){
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  }
  wonMedal(){
    this.medals++
    console.log(this.medals)
  }
}
const jorgeAthlete6 = new Athlete6('Jorge', 1985, 'Jocker', 3, 3)
console.log(jorgeAthlete6)
console.log('Jorge6 - Medals: ')
jorgeAthlete6.wonMedal()