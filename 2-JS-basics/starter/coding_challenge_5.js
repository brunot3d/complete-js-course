/* ****** Coding Challenge 5 ****** */

const john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totalAmout: [],
  tipCalc: function(){
    let values = this.bills
    values.forEach(val => {
      if( val >= 200 ){
        this.tips.push( parseFloat((val * 0.1).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.1).toFixed(2)) )
      }else if( val >= 50 && val < 200 ){
        this.tips.push( parseFloat((val * 0.15).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.15).toFixed(2)) )
      }else{
        this.tips.push( parseFloat((val * 0.2).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.2).toFixed(2)) )
      }
    })
  }
}

const mark = {
  bills: [77, 375, 110, 45],
  tips: [],
  totalAmout: [],
  tipCalc: function(){
    let values = this.bills
    values.forEach(val => {
      if( val >= 300 ){
        this.tips.push( parseFloat((val * 0.25).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.25).toFixed(2)) )
      }else if( val >= 100 && val < 300 ){
        this.tips.push( parseFloat((val * 0.1).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.1).toFixed(2)) )
      }else{
        this.tips.push( parseFloat((val * 0.2).toFixed(2)) )
        this.totalAmout.push ( parseFloat((val * 1.2).toFixed(2)) )
      }
    })
  }
}

john.tipCalc()
mark.tipCalc()

const calcAverageTips = (arr) => {
  return (arr.reduce((acc, val) => {
    acc += val
    return acc
  },0) / arr.length).toFixed(2)
}
mark.average = parseFloat( calcAverageTips(mark.tips) )
john.average =  parseFloat( calcAverageTips(john.tips) )

console.log(john)
console.log(mark)

calcAverageTips(mark.tips) > calcAverageTips(john.tips) ? 
  console.log(`Mark's family pays higher tips, with and average of $${mark.average}`):
  console.log(`John's family pays higher tips, with and average of $${john.average}`)
