import React from 'react'

export default function LineChart(props) {
  console.log('Props from LineCharts Component --->> ', props)

  let yearsCollection = []
  if (props.rawData) {
    props.rawData.forEach(elem => {
      for (let key in elem) {
        if (Number(key) >= 1995) {
          yearsCollection.push({[key]: elem[key]})
        }
      }
    })
    // Note: lastYear contains integer datatype of latest year in our array. Declared with var to overcome scoping issue below.
    var lastYear = Number(
      Object.keys(yearsCollection[yearsCollection.length - 1])
    )
    console.log('last year>>>>>', lastYear)
  }

  console.log('years Collection___ : ', yearsCollection)
  return (
    <div>
      <h2>Total student enrollment over last five years:</h2>
      {Array.isArray(yearsCollection) &&
        yearsCollection.map(year => {
          let id = Object.keys(year)
          if (id > lastYear - 5)
            return (
              <div key={id}>
                <ul>year: {id}</ul>
                <ul>
                  undergrad enrollment:{' '}
                  {year[id].student.enrollment.undergrad_12_month}
                </ul>
                <ul>
                  grad enrollment: {year[id].student.enrollment.grad_12_month}
                </ul>
                <ul>
                  total enrollment:{' '}
                  {year[id].student.enrollment.grad_12_month +
                    year[id].student.enrollment.undergrad_12_month}
                </ul>
              </div>
            )
        })}
    </div>
  )
}
