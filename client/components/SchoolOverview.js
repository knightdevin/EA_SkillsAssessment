import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  text-decoration: underline;
`

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-right: 5px;
`

const Overview = styled.div`
  background: white;
  padding: 1%;
  width: 70%;
  border-radius: 10px;
`

export default function SchoolOverview(props) {
  // const newSchools = []
  // if (props.schools) {
  //   props.schools.map(school => {
  //     let obj = {}
  //     for (let key in school) {
  //       if (key === 'school') {
  //         obj.name = school[key]
  //       } else if (key === 'school.state') {
  //         obj.state = school[key]
  //       }
  //     }
  //     obj.id = school.id
  //     newSchools.push(obj)
  //   })
  //   console.log('newSchools:  ', newSchools)
  // }
  return (
    <Overview>
      <Header>Quick Overview:</Header>
      {Array.isArray(props.schools) &&
        props.schools.map(elem => {
          return (
            <div key={elem.id}>
              <li>
                <Label>School ID:</Label>
                {elem.id}
              </li>
              <li>
                <Label>Institution:</Label>
                {elem.school.name}
              </li>
              <li>
                <Label>Website:</Label>
                <a
                  href="https://www.wisc.edu/"
                  style={{color: 'blue', textDecoration: 'underline'}}
                >
                  {elem.school.school_url}
                </a>
              </li>
              <li>
                <Label>Location:</Label>
                {elem.school.city}, {elem.school.state}
              </li>
              <li>
                <Label>Zip:</Label>
                {elem.school.zip}
              </li>
              <li>
                <Label>Total Students Enrolled:</Label>
                {elem.latest.student.enrollment.grad_12_month +
                  elem.latest.student.enrollment.undergrad_12_month}
              </li>
            </div>
          )
        })}
    </Overview>
  )
}
