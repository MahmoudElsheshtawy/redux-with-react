import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {

    const products= useSelector((state)=>state.products)
    console.log(products);
  return (
    <>
    <h1>my products</h1>
        
{
    products.map((product)=>(
        <div key={product.id}>
            <h2>id:{product.id}</h2>
            <h3>Title:{product.title}</h3>

        </div>
    ))
}



    </>
  )
}

export default Products