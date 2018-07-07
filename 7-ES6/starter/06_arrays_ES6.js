// Lecture: Arrays
const boxes = document.querySelectorAll('.box')

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes)
// boxesArr5.forEach(function(cur){
//   cur.style.backgroundColor = 'dodgerblue'
// })

// ES6
// console.log('boxes', ...boxes)
const boxesArr6 = Array.from(boxes)
boxesArr6.forEach((cur)=>{
  cur.style.backgroundColor = 'steelblue'
})


// LOOPS ES5
// for(var i = 0; i < boxesArr5.length;i++){
//   if(boxesArr5[i].className === 'box blue'){
//     // continue
//     break
//   }
//   boxesArr5[i].textContent = 'I changed to blue'
// }

// LOOPS ES6
for(const cur of boxesArr6){
  if(cur.className.includes('blue')){
    continue
  }
  cur.textContent = 'I changed to blue ES6'
}

// ES5

var ages = [12, 17, 8, 21, 14, 11]

var full = ages.map(function(cur){
  return cur > 18
})
// console.log(ages)
// console.log(full) // [false, false, false, true, false, false]
// console.log(full.indexOf(true)) // 3
// console.log(ages[full.indexOf(true)]) // 21

// ES6
fulles6 = ages.findIndex( cur => cur >= 18 )
console.log(fulles6) // 3
console.log(ages.find( cur => cur >= 18) ) //21