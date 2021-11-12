import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import './App.css';

function App() {
  const [id, setID] = useState('')

  return (
      <div className='App'>
          <Routes>
            <Route exact path='/' element={<Home setID={setID}/>}/>
            <Route path='/posts' element={<Posts id={id}/>}/>
          </Routes>
      </div>
  )
}

export default App;
