// Lecture: Arrays
const boxes = document.querySelectorAll('.box')

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes)
// boxesArr5.forEach(function(cur){
//   cur.style.backgroundColor = 'dodgerblue'
// })

// ES6
const boxesArr6 = Array.from(boxes)
boxesArr6.forEach((cur)=>{
  cur.style.backgroundColor = 'steelblue'
})