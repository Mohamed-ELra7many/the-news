import React from 'react'
import News from './components/News/News'
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Sign from './components/Sign in/Sign'
import Darkmode from './components/DarkMode/Darkmode'
const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Darkmode/>
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route exact path="/signin">
          <Sign />
        </Route>
      </Switch>

    </div>
  )
}

export default App