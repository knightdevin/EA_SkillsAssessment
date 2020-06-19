import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import {saveAs} from 'file-saver'

import {Navbar} from './components'
import Routes from './routes'
import SchoolOverview from './components/SchoolOverview'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
