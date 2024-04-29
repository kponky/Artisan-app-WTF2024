import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddProductModal = () => {
  return (
    <div className='addproduct-overlay'>
    <div className="overlay">
    <div className="addproductmodal-container"> </div>
    <div className="modal-right">
    <p className="close-btn">
    <FontAwesomeIcon icon={faTimes}/>
    </p>
    </div>
    
    
    </div>
    
    </div>
  )
}

export default AddProductModal
// <h1>Product Added succesfully </h1>
// <button className='btn'>Return Home</button>