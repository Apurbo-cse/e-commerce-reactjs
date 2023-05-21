import React from 'react'
import ProductCard from '../common/ProductCard'
const Product = () => {
  return (
    <>
    <div className="container">
        <h5 className='p-2 pb-2 mb-0'>Section Heading</h5>
        <hr className='mt-0 '/>
        <div className="row">
           <ProductCard/>
        </div>
    </div>
    </>
  )
}

export default Product