/* eslint-disable react/button-has-type */
import Axios from 'axios'
import domtoimage from 'dom-to-image'
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

const OverviewButtons = styled.div`
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
  }

  async getSchool() {
    try {
      const response = await Axios.get(
        `${endpoint}?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`
      )
      const schools = response.data
      this.setState({
        schools
      })
    } catch (error) {
      console.log(error)
    }
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

  saveToPdf = () => {
    domtoimage
      .toPng(document.getElementById('schoolData'))
      .then(function(blob) {
        var pdf = new jsPDF('l', 'pt', [window.innerWidth, 2700])
        pdf.addImage(blob, 'PNG', 0, 0)
        pdf.save('School-Overview.pdf')
      })
  }

  saveToPng = () => {
    var node = document.getElementById('schoolData')

    domtoimage.toBlob(node).then(function(blob) {
      window.saveAs(blob, 'School-Overview.png')
    })
  }

  render() {
    const schoolList = this.state.schools.results
    return (
      <div className="schoolOverview" id="schoolData">
        <Header>University of Wisconsin-Madison At a Glance</Header>
        <OverviewButtons>
          <button onClick={() => window.print()}>PRINT</button>
          <button onClick={this.saveToPdf}>Download PDF</button>
          <button onClick={this.saveToPng}>Download PNG</button>
        </OverviewButtons>
        <SchoolOverview schools={schoolList} />
        <EnrollmentChart rawData={schoolList} />
        <RaceEthnicityChart years={this.catchingYears()} />
        <ProgramsChart programsPercentages={this.schoolPrograms()} />
      </div>
    )
  }
}

export default SchoolInfo
