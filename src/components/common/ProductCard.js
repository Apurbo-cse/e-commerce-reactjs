import React from "react";
import cat from '../../assets/product.jpg'
const ProductCard = () => {
  return (
    <>
      <div className="col-md-3 mb-2">
        <div className="card">
          <img src={cat} alt="" />
          <p className=" px-2 m-0 text-muted">Lorem ipsum dolor sit amet.</p>
          <h6 className=" px-2 text-muted">60TK</h6>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
