import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
// import Hotels from './Hotels'
import Facility from './facility'
import Suites from './Suites'

function Home() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Facility/>
      <Suites/>
    </div>
  )
}

export default Home