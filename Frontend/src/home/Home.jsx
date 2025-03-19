import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  )
}

export default Home
