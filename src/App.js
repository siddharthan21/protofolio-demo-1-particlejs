import React from 'react'
import Desgin from './Pages/Desgin'
import Main from './Pages/Main'
import Navbar from './Pages/Navbar'
import Skill from './Pages/Skill'
import Skillds from './Pages/Skillds'
import './index.css'
const App = () => {
  return (
    <div className='scroll-contain'>
        <Desgin />
      <section className='main-sec'>
      <Navbar />
        <Main />
      </section>
      <section className='skill-sec'>
        <Skill />
      </section>
    </div>
  )
}

export default App