import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
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

// if (yearsCollection.length) {
//   yearsCollection.map((year) => {
//     let id = Object.keys(year)
//     if (id > lastYear - 5) {
//       const year = Number(id)
//       const undergradEnrollment = year[id].student.enrollment.undergrad_12_month
//       const gradEnrollment = year[id].student.enrollment.grad_12_month
//       const totalEnrollment =
//         year[id].student.enrollment.grad_12_month +
//         year[id].student.enrollment.undergrad_12_month
//     }
//   })
// }

export default function EnrollmentChart(props) {
  // console.log('Props from EnrollmentChart Component --->> ', props)

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
  // console.log('graph data>>>>>', graphData)
  // console.log('years Collection___ : ', yearsCollection)
  return (
    <div>
      <Header>Total student enrollment over last ten years:</Header>
      <Chart style={{paddingBottom: '28px'}}>
        <h4>Line Chart:</h4>
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
      <Chart>
        <h4>Area Chart:</h4>
        <AreaChart
          width={900}
          height={500}
          data={graphData}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
          style={{backgroundColor: 'white'}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="adademicYear" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="undergradStudents"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="graduateStudents"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="totalStudents"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </Chart>
    </div>
  )
}

// //       {Array.isArray(yearsCollection) &&
// yearsCollection.map((year) => {
//   let id = Object.keys(year)
//   if (id > lastYear - 5)
//     return (
//       <div key={id}>
//         <ul>year: {id}</ul>
//         <ul>
//           undergrad enrollment:{' '}
//           {year[id].student.enrollment.undergrad_12_month}
//         </ul>
//         <ul>
//           grad enrollment: {year[id].student.enrollment.grad_12_month}
//         </ul>
//         <ul>
//           total enrollment:{' '}
//           {year[id].student.enrollment.grad_12_month +
//             year[id].student.enrollment.undergrad_12_month}
//         </ul>
//       </div>
//     )
// })}
