// Lecture: Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
  lastName  === undefined ? lastName = 'Smith' : lastName
  nationality === undefined ? nationality = 'American' : nationality
  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}

var john = new SmithPerson('John', 1990)
console.log(john)
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')
console.log(emily)

// ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName
  this.lastName = lastName
  this.yearOfBirth = yearOfBirth
  this.nationality = nationality
}
var mike = new SmithPerson6('Mike', 1985)
console.log(mike)
var minnie = new SmithPerson6('Minnie', 1992, 'Rodriguez', 'British')
console.log(minnie)