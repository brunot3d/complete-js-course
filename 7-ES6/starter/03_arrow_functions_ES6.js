// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(item){
  return 2016 - item
})

console.log('ES5', ages5)

// ES6

const ages6 = years.map(el => 2016 - el)
console.log('ES6', ages6) 

// using index in map

const ages6_2 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
console.log('age 6 - 2', ages6_2)

const ages6_3 = years.map((el, index)=>{
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}`
})
console.log('age 6 - 3', ages6_3)