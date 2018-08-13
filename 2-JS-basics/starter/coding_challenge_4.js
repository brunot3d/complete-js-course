/* ****** Coding Challenge 4 ****** */

const john = {
  name: 'John',
  lastName: 'Smith',
  mass: 86,
  heigth: 1.84,
  calcBMI: function() {
    this.bmi = this.mass / (this.heigth * this.heigth)
    return this.bmi
  }
}

const mike = {
  name: 'Mike',
  lastName: 'Jobs',
  mass: 98.5,
  heigth: 1.97,
  calcBMI: function() {
    this.bmi = this.mass / (this.heigth * this.heigth)
    return this.bmi
  }
}
john.calcBMI()
mike.calcBMI()

if( john.calcBMI() > mike.calcBMI() ){
  console.log(`${john.name} ${john.lastName} BMI is ${john.bmi.toFixed(2)} and it's greater than Mike's`)
}else if( john.calcBMI() < mike.calcBMI() ){
  console.log(`${mike.name} ${mike.lastName} BMI is ${mike.bmi.toFixed(2)} and it's greater than John's`)
}else{
  console.log(`John and Mike have the same BMI wich is ${john.bmi.toFixed(2)}`)
}