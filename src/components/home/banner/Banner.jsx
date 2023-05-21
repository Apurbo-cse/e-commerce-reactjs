import React from 'react'
import banner from '../../../assets/banner.jpg';
const Banner = () => {
  return (
    <>
     <div className="hero">
        <div className="card text-bg-warning">
          <img src={banner} className="card-img" alt="/" height={500} />
          <div className="card-img-overlay d-flex flex-column justify-content-around">
            <div className="container">
              <h5 className="card-title display-4 text-light fw-bolder mb-0">
                NEW SESSION ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              <div className='d-flex'> 
                <button className='btn btn-outline-dark me-2'>READ MORE</button>
                <button className='btn btn-outline-warning'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner