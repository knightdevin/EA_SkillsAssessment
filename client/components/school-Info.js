import React from 'react'
import Axios from 'axios'
import {dataGovKey, endpoint} from '../../secrets'

import AllSchools from './allSchools'
import EnrollmentChart from './EnrollmentChart'

class SchoolInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    this.getSchool()
    console.log('COMPONENT DID MOUNT!')
  }

  async getSchool() {
    console.log('FETCHING!')
    try {
      // const response = await Axios.get(
      //   `https://api.data.gov/ed/collegescorecard/v1/schools?fields=id,school.name,school.state&api_key=${dataGovKey}`
      // )
      const response = await Axios.get(
        `${endpoint}?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`
      )
      const schools = response.data
      console.log('SCHOOLS! >>>>>>>>>>>>>>>>', schools)
      this.setState({
        schools
      })
      console.log('schools updated!')
    } catch (error) {
      console.log(error)
    }
    // const apiCall = await fetch(``);
  }

  render() {
    const schoolList = this.state.schools.results
    // console.log('SCHOOL LIST>>>>', schoolList)
    return (
      <div className="schoolOverview">
        <h1>
          Based on your query, here is a breakdown of the school you've
          selected:
        </h1>

        <h2>Overview:</h2>
        <AllSchools schools={schoolList} />
        <EnrollmentChart rawData={schoolList} />
      </div>
    )
  }
}

export default SchoolInfo
