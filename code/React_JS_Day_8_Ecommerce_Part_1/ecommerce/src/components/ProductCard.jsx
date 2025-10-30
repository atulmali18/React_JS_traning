import React from 'react'

const ProductCard = ({ product }) => {
  const { name, description, img, price } = product

  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted small flex-grow-1">{description}</p>
        <h6 className="text-success fw-bold">₹ {price}</h6>
        <button className="btn btn-primary w-100 mt-2">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
