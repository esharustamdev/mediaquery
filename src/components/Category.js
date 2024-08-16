import React from 'react'

const Category = () => {
  return (
    <>
      <div className='categoryCont'>
        <div className='catHeading'>
          <h1>
            Sustainable Solutions for Modern Living <br /> at{' '}
            <span>Swiss Haven Farmhouses</span>
          </h1>
        </div>
        <div className='categoryDiv'>
          <div className='leftDiv'>
            <div className='categoryImg'>
              <img src='imges/categoryImg1.jpg' alt='' />
            </div>
            <div className='categoryPara'>
              <h2>PlayGrounds And Parks</h2>
              <p>
                Parks and playgrounds will be established in Oasis Farms <br />
                Islamabad to allow you to enjoy games and spend quality time
                with your family
              </p>
            </div>
          </div>
          <div className='RightDiv'>
            <div className='categoryImg'>
              <img src='imges/categoryImg2.jpg' alt='' />
            </div>
            <div className='categoryPara'>
              <h2>Outdoor games</h2>
              <p>
                An outdoor gym will be developed in the society, featuring the
                latest equipment and trainers to help residents maintain their
                healthy <br /> lifestyles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
//  <div className='RightDivimg'>
// <div className='img'>
// <img src='imges/categoryImg2.jpg' alt='' />
// </div>
// <div className='body'>
// <h2>Outdoor Gym</h2>
// <p>
//   An outdoor gym will be developed in the society, featuring the
//   latest <br /> equipment and trainers to help residents maintain
//   their healthy <br /> lifestyles.
// </p>
// </div>
// </div>

{
  /* <div className='CategoryDivs'>
<div className='leftDivImg'>
  <div className='img'>
    <img src='imges/categoryImg1.jpg' alt='' />
  </div>
  <div className='body'>
    <h2>Playgrounds & Parks</h2>
    <p>
      Parks and playgrounds will be established in Oasis Farms
      Islamabad <br /> to allow you to enjoy games and spend quality
      time with your family
    </p>
  </div>
</div>


</div> */
}
