/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
class TownElements {
  constructor(name, buildYear) {
    this.name = name
    this.buildYear = buildYear
  }
}
class Park extends TownElements {
  constructor(name, buildYear, area, trees) {
    super(name, buildYear)
    this.area = area
    this.trees = trees
  }
  treeDensity() { return (this.trees / this.area).toFixed(2) }
  parkAge() { return new Date().getFullYear() - this.buildYear }
}
class Street extends TownElements {
  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear)
    this.length = length
    this.size = size
  }
}

const street1 = new Street('Lomas Valentinas', 1953, 750, 'tiny')
const street2 = new Street('Alameda São Caetano', 1934, 3000, 'small')
const street3 = new Street('Goiás', 1928, 11000, 'big')
const street4 = new Street('Av. Pres. Kennedy', 1964, 5000)

const park1 = new Park('National Park', 1975, 1150, 890)
const park2 = new Park('Central Park', 1928, 890, 13500)
const park3 = new Park('Golden Gate Park', 1870, 1583, 22700)

const myParks = [park1, park2, park3]
const myStreets = [street1, street2, street3, street4]

const treeDensity4All = ()=>{
  myParks.forEach((park)=>{
    console.log(`Tree density of ${park.name} = ${park.treeDensity()} `)
  })
}
const ageAverage = myParks.reduce((acc, park) => {
  return acc + park.parkAge()
},0)

const streetsFunctions = ((streetsArr) => {
  return {
    calculateTotalLength : () => {
      const total = streetsArr.reduce((acc, street) => {return acc + street.length}, 0)
      return total
    },
    calculateStreetsLengthAverage : () => {
      return streetsFunctions.calculateTotalLength() / streetsArr.length
    },
    allStreetsClassification : () => {
      streetsArr.forEach((street) => {
        console.log(`${street.name}, build in ${street.buildYear}, is a ${street.size} street`)
      })
    }
  }
})(myStreets)


console.log('\n======== Parks Report ========\n')
treeDensity4All()
console.log(`The average age of the parks is ${(ageAverage / myParks.length).toFixed(2)} years`)
myParks.filter( (park) => {
  if(park.trees > 1000){
    console.log(`${park.name} has more than 1000 trees => Total = ${park.trees}`)
  }
})
console.log('\n======== Streets Report ========\n')

console.log(`Our ${myStreets.length} streets have a total length of ${streetsFunctions.calculateTotalLength()}km, with an average of ${streetsFunctions.calculateStreetsLengthAverage()}km`)
streetsFunctions.allStreetsClassification()
  