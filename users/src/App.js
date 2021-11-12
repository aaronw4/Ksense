import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import './App.css';

function App() {
  const [id, setID] = useState('')
  const [name, setName] = useState('')

  return (
      <div className='App'>
          <Routes>
            <Route exact path='/' element={<Home setID={setID} setName={setName}/>}/>
            <Route path='/posts' element={<Posts id={id} name={name}/>}/>
          </Routes>
      </div>
  )
}

export default App;
