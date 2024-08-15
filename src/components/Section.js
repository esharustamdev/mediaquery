import React from 'react'

const Section = () => {
  return (
    <>
      <div className='sectionCont'>
        <div className='secDivLeft'>
          <div className='secDivLeftImg'>
            <img src='imges/sectionLeft.png' alt='' />
          </div>
          <div className='sectionPara'>
            <p>
              Welcome to Swiss Haven Farmhouses, an <br /> exclusive project by
              Al-Nafey Group. <br /> offering luxurious living in the heart of
              nature.
              <br /> Set in a peaceful location with all the modern <br />{' '}
              comforts, Swiss Haven Farmhouses provide <br /> a perfect blend of
              elegance and tranquility. <br /> Embrace a lifestyle where nature
              meets <br /> convenience.
            </p>
          </div>
        </div>
        <div className='secDivRight'>
          <div className='secDivRightImg'>
            <img src='imges/sectionImg.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
