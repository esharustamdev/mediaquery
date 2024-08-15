import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footerCont'>
        <div className='footerDiv1'>
          <h1>Company Inofrmation</h1>
          <p>
            Address: Lahore Motorway City, Kot <br /> Abdul Malik Interchange,
            Lahore, <br /> Pakistan
          </p>
          <p>Phone: +92 315 6664 441</p>
          <p>Email: example@gmail.com</p>
        </div>
        <hr />
        <div className='footerDiv2'>
          <h1>Quick Links</h1>
          <li> Home</li>
          <li> About Us</li>
          <li> Contact</li>
          <li> Booking Form</li>
        </div>
        <hr />
        <div className='footerDiv3'>
          <h1>Legal Information</h1>
          <li>Privacy Policy</li>
          <li>Terms of Condition</li>
        </div>
      </div>
      <hr />
      <div className='footerend'>
        <p>© 2024 Swiss Haven Farmhouses. All right reserved</p>
      </div>
    </>
  )
}

export default Footer
