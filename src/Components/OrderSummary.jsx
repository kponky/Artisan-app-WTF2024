import React from 'react'

const OrderSummary = () => {
  return (
    <div className='order-wrapper'>
    <div className="cart-card">
    <div className="cart-card-header">
      <div className="item-count">
        <h3>My Cart</h3> <span>{cart.length}</span>
      </div>

      <div className="cart-item_image">
      <img src={item.image} alt={item.title} />
    </div>
      
    
    </div>


   
  </div>


    </div>
  )
}

export default OrderSummary
