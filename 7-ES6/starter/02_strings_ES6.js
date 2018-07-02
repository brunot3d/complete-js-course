// Lecture: Strings

let firstName = 'John'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge(year) {
  return 2018 - year
}

// ES5
console.log('ES5', 'This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.'  )

// ES6
console.log('ES6', `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`)

const n = `${firstName} ${lastName}`
console.log('StartsWith ', n.startsWith('J')) // true
console.log('EndsWith ', n.endsWith('th')) // true
console.log('Includes ', n.includes('hn')) // true
console.log(firstName.repeat(5)) // JohnJohnJohnJohnJohn

