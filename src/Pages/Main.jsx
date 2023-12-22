import dev from '../Style/download.png'
// import dev from '../Style/download.jpeg'
import React from 'react'
import '../Style/main.css'
const Main = () => {
  return (
    <div className='main'>
      <div className="main-left">
        <p className='main-text'>
          "Crafting innovative web solutions with precision and creativity. Specializing in responsive design, seamless user experiences, and cutting-edge development. <span> Elevating digital presence through  dynamic coding <hr className='hr'/></span> and intuitive interfaces."
        </p>
      </div>
      <div className="main-right">
        <img src={dev} alt="" width="550px" />
      </div>
      <hr/>
    </div>
  )
}
export default Main