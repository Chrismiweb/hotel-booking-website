import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
// import Hotels from './Hotels'
import Facility from './facility'
import Suites from './Suites'
import TakeTour from './takeTour'
import Footer from '../footer/Footer'


function Home() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Facility/>
      <Suites/>
      <TakeTour/>
      <Footer/>
      
    </div>
  )
}

export default Home