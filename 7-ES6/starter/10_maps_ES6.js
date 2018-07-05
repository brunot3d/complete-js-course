// Lecture: Maps

const question = new Map()
question.set('question', 'What is the official name of the lateste major JavaScript version?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct Answer')
question.set(false, 'Wrong, please try again')

console.log(question.get('question'))
console.log(question.size)

question.delete(4)

// evitando multiplos delets
if(question.has(4)){
  // qestion.delete(4)
  console.log('Answer 4 is here')
}
// question.clear() delete all

question.forEach( (value,key) => console.log(`This is ${key}, and it's set to ${value}`) )

for (let [key,value] of question.entries()){
  // console.log(`This is ${key}, and it's set to ${value}`)
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`)
  }
}

const ans = parseInt(prompt('Write the correct answer'))
console.log( question.get( ans === question.get('correct')) )