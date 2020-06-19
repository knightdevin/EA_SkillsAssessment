import {
  CartesianGrid,
  // LabelList,
  Legend,
  Line,
  LineChart,
  // ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import React from 'react'
import styled from 'styled-components'

const Chart = styled.div`
  display: flex;
  justify-content: center;
`

const Header = styled.h2`
  display: flex;
  justify-content: center;
`

export default function EnrollmentChart(props) {
  let yearsCollection = []
  if (props.rawData) {
    props.rawData.forEach(elem => {
      for (let key in elem) {
        if (Number(key) >= 1995) {
          yearsCollection.push({[key]: elem[key]})
        }
      }
    })
    // Note: lastYear contains integer of latest year stored in our array. It's declared with var to overcome scoping issue below.
    var lastYear = Number(
      Object.keys(yearsCollection[yearsCollection.length - 1])
    )
  }

  let graphData = []
  if (yearsCollection.length) {
    yearsCollection.map(year => {
      let id = Object.keys(year)
      if (id > lastYear - 10) {
        let yearOf = Number(id)
        let undergradEnrollment = year[id].student.enrollment.undergrad_12_month
        let gradEnrollment = year[id].student.enrollment.grad_12_month
        let totalEnrollment =
          year[id].student.enrollment.grad_12_month +
          year[id].student.enrollment.undergrad_12_month
        graphData.push({
          adademicYear: yearOf,
          undergradStudents: undergradEnrollment,
          graduateStudents: gradEnrollment,
          totalStudents: totalEnrollment
        })
      }
    })
  }

  return (
    <div>
      <Header>Student enrollment over last ten years:</Header>
      <Chart style={{paddingBottom: '28px'}}>
        <LineChart
          width={900}
          height={500}
          data={graphData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
          style={{backgroundColor: 'white'}}
        >
          <XAxis dataKey="adademicYear" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="undergradStudents"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
          <Line type="monotone" dataKey="graduateStudents" stroke="#82ca9d" />
          <Line type="monotone" dataKey="totalStudents" stroke="red" />
        </LineChart>
      </Chart>
    </div>
  )
}
