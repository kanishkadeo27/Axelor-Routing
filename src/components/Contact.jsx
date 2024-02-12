import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/home')
    }
  return (
    <>
      <section>
        contact page
      </section>
      <button onClick={goToHome}>Go to Home</button>
    </> 
  )
}

export default Contact
