import React from 'react'
import cat from '../../assets/product.jpg'
const Product = () => {
  return (
    <>
    <div className="container">
        <h5 className='p-2 pb-2 mb-0'>Section Heading</h5>
        <hr className='mt-0 '/>
        <div className="row">
            <div className="col-md-3 mb-2">
                <div className="card">
                    <img src={cat} alt="" />
                    <p className=' px-2 m-0 text-muted'>Lorem ipsum dolor sit amet.</p>
                    <h6 className=' px-2 text-muted'>60TK</h6>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product