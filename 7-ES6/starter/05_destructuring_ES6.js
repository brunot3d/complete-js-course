// Lecture: Destructuring

// ES5
var john = ['John', 26]
// var name = john[0]
// var age = john[1]

// ES6
const[name, age] = ['Mike', 26]
console.log(name)
console.log(age)

const obj = {
  firstName: 'Minnie',
  lastName: 'Haberdashery'
}
const {firstName, lastName} = obj
console.log(firstName)
console.log(lastName)

const{firstName: a, lastName: b} = obj
console.log('var a -', a)
console.log('var b -', b)

// ==================================>

function calcAgeRetirement(year){
  const idade = new Date(). getFullYear() - year
  return [idade, 65 - idade]
}
const [idade, retirement] = calcAgeRetirement(1990)
console.log('age', idade)
console.log('retirement', retirement)