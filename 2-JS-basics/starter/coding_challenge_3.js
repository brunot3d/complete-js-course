/* ****** Coding Challenge 3 ****** */

const bills = [124, 48, 268]
const tips = []
const finalValues = []

bills.forEach(val => {
  if ( val >= 200 ) {
    tips.push( (val * 0.1).toFixed(2) )
    finalValues.push ( (val * 1.1).toFixed(2) )
  } else if ( val < 200 && val >= 50 ) {
    tips.push( (val * 0.15).toFixed(2) )
    finalValues.push( (val * 1.15).toFixed(2) )
  } else {
    tips.push( (val * 0.2).toFixed(2) )
    finalValues.push( (val * 1.2).toFixed(2) )
  }
})

console.log(`Jonh's bills where ${bills}`)
console.log(`Jonh's tips where ${tips}`)
console.log(`Jonh's paid amout where ${finalValues}`)
