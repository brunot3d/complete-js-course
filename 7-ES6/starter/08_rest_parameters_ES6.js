// Lecture : Rest Parameters

// ES5
function isFullAge(){
  // console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments)
  argsArr.forEach(function(cur){
    console.log( (2018 - cur) >= 18 )
  })
}
// isFullAge(1990,1999,1965)
// isFullAge(1990,1999,1965, 2016, 1987)

// ES6
function isFullAge6(...years){
  console.log(years)
  years.forEach((cur) => console.log( (2018 - cur) >= 18 ) )
}
isFullAge6(1990,1999,1965, 2016, 1987)