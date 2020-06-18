import React from 'react'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

export default function RaceEthnicityChart(props) {
  const lastYear = props.years[props.years.length - 1]

  let chartData = []
  let ethnicity = {}

  for (let key in lastYear) {
    if (typeof Number(key) === 'number') {
      ethnicity = lastYear[key].student.demographics.race_ethnicity
      for (let prop in ethnicity) {
        if (ethnicity[prop] !== null) {
          chartData.push({
            name: prop,
            value: Number((ethnicity[prop] * 100).toFixed(2))
          })
        }
      }
    }
  }

  console.log('ethnicity AFTER loop......', ethnicity)
  console.log('chartData ---------> ', chartData)
  return (
    <div style={{height: '300px'}}>
      <h2>Ethnicity / Race of student body last year</h2>
      <PieChart width={800} height={400}>
        <Pie
          isAnimationActive={false}
          data={chartData}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={140}
          fill="#8884d8"
          label="Student Body Ethnicity Make-up"
        />
        <Tooltip />
      </PieChart>
    </div>
  )
}
