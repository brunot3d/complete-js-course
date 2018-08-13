/* ****** Coding Challenge 2 ****** */

const jTeam = [89, 120, 103]
const mTeam = [116, 94, 123]
const maryTeam = [97, 134, 105]

const scoreSum = (scoreArr) => {
  const sum = scoreArr.reduce((acc, score) => {
    acc += score
    return acc
  })
  return (sum / scoreArr.length).toFixed(2)
}

const jTeamAverage = scoreSum(jTeam)
const mTeamAverage = scoreSum(mTeam)
const maryTeamAverage = scoreSum(maryTeam)

if( jTeamAverage > mTeamAverage && jTeamAverage > maryTeamAverage){
  console.log(`John's team wins with ${jTeamAverage} average score`)
}else if( mTeamAverage > jTeamAverage && mTeamAverage > maryTeamAverage){
  console.log(`Mike's team wins with ${mTeamAverage} average score`)
}else if( maryTeamAverage > jTeamAverage && maryTeamAverage > mTeamAverage){ 
  console.log(`Mary's team wins with ${maryTeamAverage} average score`)
}else{
  console.log(`There's a draw`)
}