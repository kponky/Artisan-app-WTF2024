import React from 'react'

const ProductCard4 = (props) => {
  const item = props

  return (
    <div>
    <div className="card-items">
    <div className="card-img">
      <img src={item.image} alt="" />
    </div>
    <div className="item1">
      <p>{item.title}</p>
      <span>
        <span className="p-item">{item.discount}</span>
      </span>
    </div>
    <div className="item2">
      <div className="price">
        <p style={{ textDecoration: "none" }}>
          5k people enrolled </p>
      </div>
    </div>
    <div className="btn-wrap">
      <button className="btn"> Register</button>
    </div>
  </div>
      
    </div>
  )
}

export default ProductCard4
