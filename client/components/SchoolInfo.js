import Axios from 'axios'
import jsPDF from 'jspdf'
import React from 'react'
import styled from 'styled-components'

import {dataGovKey, endpoint} from '../../secrets'

import SchoolOverview from './SchoolOverview'
import EnrollmentChart from './EnrollmentChart'
import RaceEthnicityChart from './RaceEthnicityChart'
import ProgramsChart from './ProgramsChart'

const Header = styled.div`
  align-items: center;
  background-color: #05849e;
  border: 1px solid black;
  box-shadow: 0px 5px 6px 0px rgb(0, 0, 0);
  color: white;
  display: flex;
  font-size: 20px;
  height: 50px;
  justify-content: center;
  margin-top: 2px;
  width: 100%;
`

const PrintButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`

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

  catchingYears() {
    let yearsCollection = []
    if (this.state.schools.results) {
      this.state.schools.results.forEach(elem => {
        for (let key in elem) {
          if (Number(key) >= 1995) {
            yearsCollection.push({[key]: elem[key]})
          }
        }
      })
    }
    return yearsCollection
  }

  schoolPrograms() {
    let programCollection = {}
    const programs = []
    if (this.state.schools.results) {
      this.state.schools.results.forEach(elem => {
        programCollection = elem.latest.academics.program_percentage
      })
      // eslint-disable-next-line guard-for-in
      for (let key in programCollection) {
        programs.push({
          name: key,
          value: Number((programCollection[key] * 100).toFixed(2))
        })
      }
    }
    return programs
  }

  print = () => {
    $('#downloadPDF').click(function() {
      domtoimage
        .toPng(document.getElementById('content2'))
        .then(function(blob) {
          var pdf = new jsPDF('l', 'pt', [
            $('#content2').width(),
            $('#content2').height()
          ])

          pdf.addImage(
            blob,
            'PNG',
            0,
            0,
            $('#content2').width(),
            $('#content2').height()
          )
          pdf.save('test.pdf')

          that.options.api.optionsChanged()
        })
    })
  }

  render() {
    const schoolList = this.state.schools.results
    return (
      <div className="schoolOverview" id="content2">
        <Header>University of Wisconsin-Madison At a Glance</Header>
        <PrintButton>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => window.print()}>PRINT</button>
        </PrintButton>
        <button className="btn btn-info" id="downloadPDF">
          Download PDF
        </button>
        <SchoolOverview schools={schoolList} />
        <EnrollmentChart rawData={schoolList} />
        <RaceEthnicityChart years={this.catchingYears()} />
        <ProgramsChart programsPercentages={this.schoolPrograms()} />
      </div>
    )
  }
}

export default SchoolInfo
