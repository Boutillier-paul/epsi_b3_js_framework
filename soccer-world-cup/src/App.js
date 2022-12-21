import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Current from './pages/Current/Current'
import Incoming from './pages/Incoming/Incoming'
import Passed from './pages/Passed/Passed'
import Error404 from './pages/Errors/Error404'

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <ul>
          <li><Link to='/'>Current Matches</Link></li>
          <li><Link to='/incoming'>Incoming Matches</Link></li>
          <li><Link to='/passed'>Passed Matches</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<Current/>}/>
          <Route path='/incoming' element={<Incoming/>}/>
          <Route path='/passed' element={<Passed/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </div>
    );
  } 
}

export default App;
