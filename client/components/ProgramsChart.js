import {Cell, Legend, PieChart, Pie, Tooltip} from 'recharts'
import React from 'react'
import styled from 'styled-components'

import {COLORS} from './constants'

const Chart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Header = styled.h2`
  display: flex;
  justify-content: center;
`

export default function ProgramsChart(props) {
  const filteredPrograms = props.programsPercentages.filter(
    program => program.value !== 0
  )
  console.log(filteredPrograms)

  return (
    <React.Fragment>
      <Header>Percentage breakdown of programs at this school:</Header>
      <Chart>
        <PieChart width={800} height={506} style={{backgroundColor: 'white'}}>
          <Pie
            data={filteredPrograms}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={140}
            fill="#82ca9d"
          >
            {filteredPrograms.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Pie
            isAnimationActive={false}
            data={filteredPrograms}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="blue"
            label
          >
            {filteredPrograms.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie> */}
          <Tooltip />
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
      </Chart>
    </React.Fragment>
  )
}
