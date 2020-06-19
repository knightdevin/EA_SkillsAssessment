import React from 'react'
import {Cell, PieChart, Pie, Legend, Tooltip} from 'recharts'
import styled from 'styled-components'

import {COLORS} from './constants'

const Chart = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: center;
`

const Header = styled.h2`
  display: flex;
  justify-content: center;
`

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

  return (
    <React.Fragment>
      <Header>Ethnicity / Race of student body last year</Header>
      <Chart>
        <PieChart width={800} height={365} style={{backgroundColor: 'white'}}>
          <Pie
            isAnimationActive={false}
            data={chartData}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={40}
            outerRadius={140}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </Chart>
    </React.Fragment>
  )
}
