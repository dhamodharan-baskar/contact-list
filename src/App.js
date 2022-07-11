import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from './Containers/List';

class App extends Component {
  render() { 
    return (
      <div className="App">
         <Router>
           <Routes>
             <Route exact path="/" element={<List />} />
            </Routes>
         </Router>
       </div>
    )
  }
}

export default App;
