import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {SchoolInfo, WelcomePage} from './components'

class Routes extends Component {
  render() {
    return (
      <div className="routesContainer">
        <Switch>
          <Route path="/school" component={SchoolInfo} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Routes)
