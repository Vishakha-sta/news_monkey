import './App.css';
import NavBar from './components/NavBar.js'
import React, { Component } from 'react'
import News from './components/News';

import {
  Routes, 
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>

<NavBar />
      <Routes>
        <Route exact path="/home" element={<News pageSize={9} key="general" country="in" category="general"/>} />
        <Route exact path="/general" element={<News pageSize={9} key="general" country="in" category="general"/>} />
        <Route exact path="/sports" element={<News pageSize={9} key="sports" country="in" category="sports"/>} />
        <Route exact path="/science" element={<News pageSize={9} key="science" country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News pageSize={9} key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News pageSize={9} key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={<News pageSize={9} key="technology" country="in" category="technology"/>} />
        <Route exact path="/health" element={<News  pageSize={9} key="health" country="in" category="health"/>} />
      </Routes>
               
      </div>
    )
  }
}



// In navbar link are displaying in blue color with underline want to remove them 
// badge is not shifting right by 35px want to shift it
// one error in comming called something is true boolean fixed don't know how to fix it want to fix it