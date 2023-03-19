import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
export const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='Possibility'>
      <div className='possibility__img'><img src={possibilityImage} alt="girl wearing vr headset" /></div>
      <div className='possibility__content'>
        <p className='blue__color'>Request Early Access to Get Started</p>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p className='faint__blue'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='orange__color'>Request Early Access to Get Started</p>
      </div>

      </div>
  )
}

export default Possibility;