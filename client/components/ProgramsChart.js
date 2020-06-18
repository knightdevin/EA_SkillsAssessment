import React from 'react'

export default function ProgramsChart(props) {
  const filteredPrograms = props.programsPercentages.filter(
    program => program.value !== 0
  )
  console.log(filteredPrograms)
  // let total = 0
  // if (filteredPrograms.length) {
  //   filteredPrograms.forEach(program => {
  //     total += program.value
  //   })
  // console.log('TOTAL AMOUNT OF VALUES____>>>>', total)
  // }

  return (
    <div>
      <h1>Programs percentages chart on its way!</h1>
    </div>
  )
}
