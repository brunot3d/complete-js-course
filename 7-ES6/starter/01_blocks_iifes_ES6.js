// ES6 - Blocks amd IIFEs

{
  const a = 1
  let b = 2
  var c = 3
}
// console.log(a + b) // ReferenceError: a is not defined
// console.log(c) // 3

// ES5

(function() {
  var d = 3
})()
console.log(d) // ReferenceError: d is not defined
