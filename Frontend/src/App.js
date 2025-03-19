import React from 'react'
import Home from './home/Home'
import {Route, Routes} from 'react-router-dom'
import Courses from './components/courses/Courses'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App
