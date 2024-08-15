import React from 'react'

const ImgComp = () => {
  //ye tarika tha
  return (
    <>
      <div className='image-box'>
        <div className='img'>
          <img src='' alt='' />
        </div>
        <div className='body'>
          <h2>Image Title</h2>
          <p>Image Description</p>
        </div>
      </div>
      {/* ab different dekhe r btye mujy kia farq hai alg alg div m kia habap n exactly */}
      <div className='leftDivImg'>
        <div className='img'>
          <img src='imges/categoryImg1.jpg' alt='' />
        </div>
        <div className='body'>
          <h2>Playgrounds & Parks</h2>
          <p>
            Parks and playgrounds will be established in Oasis Farms Islamabad{' '}
            <br /> to allow you to enjoy games and spend quality time with your
            family
          </p>
        </div>
      </div>
    </>
  )
}

export default ImgComp
