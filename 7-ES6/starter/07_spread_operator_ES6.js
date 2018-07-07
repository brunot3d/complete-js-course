// Lecture: Spread Operator


function addFourAges (a, b, c, d){
  return a + b + c + d
}

var sum1 = addFourAges(18,30,12,21)
console.log('vanilla\t=', sum1)

// ES5
var ages = [18,30,12,21]
var sum2 = addFourAges.apply(null, ages)
console.log('apply\t=', sum2)


// ES6
const sum3 = addFourAges(...ages)
console.log('ES6\t=', sum3)

// Ex2
const familySmith = ['John', 'jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familyMiller, ...familySmith]
console.log('Big Family =', bigFamily)

// Ex3 DOM manipulation
const h = document.querySelector('h1')
const boxes2 = document.querySelectorAll('.box')
const all = [h, ...boxes]
console.log(all)
Array.from(all).forEach(cur => cur.style.color = 'purple')