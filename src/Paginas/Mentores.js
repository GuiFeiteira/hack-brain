import React, { useState } from 'react'
import './Mentores.css'

function Mentores() {

  const [name, setName] = useState('Mentor Name')
  const [job, setJob] = useState('Mentor Job')
  const [about, setAbout] = useState('Abouttttttttttttttttttttttttttttttttttttttttttttt')


  return (
    <div className='mentor_card'>
      <div className='upper_container'>
        <div className='image_container'>
          <img src='' alt='' height="100px" width="100px"/>
        </div>
      </div>
      <div className='lower_container'>
        <h1>{name}</h1> 
        <h4>{job}</h4>
        <p>{about}</p>
      </div>
    </div>
  )
}

export default Mentores
