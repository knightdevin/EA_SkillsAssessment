import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import {saveAs} from 'file-saver'

import {Navbar} from './components'
import Routes from './routes'
import SchoolOverview from './components/SchoolOverview'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes />
//     </div>
//   )
// }

import jsPDF from 'jspdf'

class App extends React.Component {
  state = {
    name: '',
    pdfId: 0,
    price1: 0,
    price2: 2
  }

  handleChange = ({target: {value, name}}) => this.setState({[name]: value})

  createAndDownloadPdf = () => {
    axios
      .post('api/pdf/create-pdf', this.state)
      .then(() => axios.get('api/pdf/fetch-pdf', {responseType: 'blob'}))
      .then(res => {
        const pdfBlob = new Blob([res.data], {type: 'application/pdf'})

        saveAs(pdfBlob, 'newPdf.pdf')
      })
  }

  generatePDF = () => {
    var doc = new jsPDF('p', 'pt')
    // doc.text(<SchoolOverview />)
    // var doc = new jsPDF()
    // doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()))
    doc.save('myDocument.pdf')

    // doc.text(20, 20, 'This is the first title.')

    // doc.setFont('helvetica')
    // doc.setFontType('normal')
    // doc.text(20, 60, 'This is the second title.')

    // doc.setFont('helvetica')
    // doc.setFontType('normal')
    // doc.text(20, 100, 'This is the thrid title.')

    // doc.save('demo.pdf')
  }

  render() {
    return (
      <div>
        {/* <input
          typx="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          typx="Number"
          placeholder="PDF ID"
          name="pdfId"
          onChange={this.handleChange}
        />
        <input
          typx="Number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          typx="Number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        /> */}
        <Navbar />
        <Routes />
        <button onClick={this.generatePDF}>Download PDF</button>
      </div>
    )
  }
}

export default App
