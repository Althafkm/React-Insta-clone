
import './App.css';
import React from 'react';
import data from './data/data.json';


const newdata=data;
console.log(newdata)
console.log(newdata[0].name)
function App() {
  return (
    <Postview />
  );
}

export default App;
