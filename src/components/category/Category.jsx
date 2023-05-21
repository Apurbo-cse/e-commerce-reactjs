import React from 'react'
import ProductCard from '../common/ProductCard'

const Category = () => {
  return (
   <>
   <div className="container">
        <h5 className='p-2 pb-2 mb-0'>Category Title</h5>
        <hr className='mt-0 '/>
        <div className="row">
           <ProductCard innerPage/>
        </div>
    </div>
   </>
  )
}

export default Category