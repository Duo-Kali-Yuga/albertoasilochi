import React from 'react'
import { About, Contact, Experience, Hero, NavBar, Tech, Projects } from '../components'


const Home = () => {
  return (
    <main>
      <Hero/>
      <NavBar/>
      <About/>
      <Tech/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Home
