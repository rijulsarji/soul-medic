import React from 'react'
import { urlFor } from "../lib/client";
import "../styles/components/ProductPreview.css"

const ProductPreview = ({ product }) => {

  return (
    <div className='prodPrevBody'>
      <img src={urlFor(product.image)} alt="product" />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  )
}

export default ProductPreview