import React from 'react'
import Home from './home/Home'
import {Route, Routes, Navigate} from 'react-router-dom'
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <div>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
