import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.scss'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main'

export default () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  </div>
)




