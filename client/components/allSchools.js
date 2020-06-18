import React from 'react'

export default function AllSchools(props) {
  console.log('PROPS>>>>', props)

  const newSchools = []
  if (props.schools) {
    props.schools.map(school => {
      let obj = {}
      for (let key in school) {
        if (key === 'school') {
          obj.name = school[key]
        } else if (key === 'school.state') {
          obj.state = school[key]
        }
      }
      obj.id = school.id
      // obj.school = school.school
      newSchools.push(obj)
    })

    console.log('newSchools? :  ', newSchools)
    // for (let key in school) {
    //   console.log('>>>>>>>>>>', school[key])
    //   console.log('KEY???', key)
    //   console.log('typeof key?', typeof key)
    // }
    // console.log('>>>', typeof school[name])
    // console.log('name?', school.school.name)
  }

  return (
    <div>
      {Array.isArray(props.schools) &&
        props.schools.map(elem => {
          return (
            <div key={elem.id}>
              <li>School ID: {elem.id}</li>
              <li>Institution: {elem.school.name}</li>
              <li>
                Website:{' '}
                <a href="https://www.wisc.edu/">{elem.school.school_url}</a>
              </li>
              <li>
                Location: {elem.school.city}, {elem.school.state}
              </li>
              <li>Zip: {elem.school.zip}</li>
              <br />
            </div>
          )
        })}
    </div>
  )
}
