import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data/data.json'
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import Postview from './post-view-page';
import Landingpage from './landing-page';


const newdata=data;
console.log(newdata)
console.log(newdata[0].name)
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/postview' element={<Postview />}></Route>
        <Route exact path='/' element={<Landingpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
