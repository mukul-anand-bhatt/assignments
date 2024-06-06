import React from 'react'
import './userProfileCard.css'
import profile_icon from '../assets/WIN_20230925_10_41_18_Pro.jpg'
function App() {

  return (
    <div className='upc'>
      <div className='gradiant'></div>
      <div className='profile-down'>
        <img src={profile_icon} alt='profile-icon' />
      </div>
        <div className='profile-title'>Mukul Anand Bhatt</div>
        <div className=' profile-description'>
        I end this misery soon!.
        </div>
      <div className='profile-photo'><a href='mukulbhatt941@gmail.com'></a></div>
    </div>
  )
}

export default App
