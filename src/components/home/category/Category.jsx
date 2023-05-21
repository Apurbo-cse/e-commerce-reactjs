import React from 'react'
import cat from '../../../assets/banner.jpg'

const Category = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-2 mb-2">
            <div className="card position-relative">
              <img src={cat} alt=""  className='cat-img'/>
              <span className='position-absolute px-2 bottom-0'>New Cat</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category