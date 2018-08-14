// Coding Challenge 1
const mark = {
  mass: 84.5,
  height: 1.83,
}
// Coding Challenge 1
const john = {
  mass: 97,
  height: 1.68
}
const bmi = (mass, height) => {
  return mass / (height * height)
}
const BMIcompare = bmi(mark.mass, mark.height).toFixed(2) >= bmi(john.mass, mark.height).toFixed(2)
console.log('Is Mark\'s BMI higher than John\'s? '+ BMIcompare)