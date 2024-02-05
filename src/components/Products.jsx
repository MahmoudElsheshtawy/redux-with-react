import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addproduct ,FetchProduct } from '../redux-Toolkit/slicellis/ProductSlice'
import {FetchProduct} from '../redux-Toolkit/slicellis/ProductSlice';
const Products = () => {
    const dispach =useDispatch()
    const products= useSelector((state)=>state.product)
    console.log(products);



   useEffect(()=>{



    dispach(FetchProduct())
   },[])


  return (
    <>
    <h1>my products</h1>
        {/* <button onClick={()=>dispach(addproduct({id:"2",title:"im nobody"}))}>addproduct</button> */}
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