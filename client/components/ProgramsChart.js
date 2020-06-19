import React from 'react'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

export default function ProgramsChart(props) {
  const filteredPrograms = props.programsPercentages.filter(
    program => program.value !== 0
  )
  console.log(filteredPrograms)

  return (
    <div>
      <h2>Percentage breakdown of programs at this school:</h2>
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          data={filteredPrograms}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="blue"
          label
        />
        <Pie
          data={filteredPrograms}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </div>
  )
}
