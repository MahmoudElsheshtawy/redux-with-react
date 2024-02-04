
export const WITHDRAW_MONEY="WITHDRAW_MONEY"
export const DEPOSET_MONEY="DEPOSET_MONEY"
export const GET_PRODUCTS ="GET_PRODUCTS"
export const ADD_PRODUCTS ="ADD_PRODUCTS"



 
export const withdrow =(amount)=>{
    return{
        type:WITHDRAW_MONEY,
        payload : amount
    }
}
export const deposet =(amount)=>{
    return{
        type:DEPOSET_MONEY,
        payload : amount
    }
}
// product action

export const addproduct= (product)=>{
    return{
        type:ADD_PRODUCTS,
        payload:product
    }
}
export const getproduct= (products)=>{
    //for set product in the store
    return{
        type:GET_PRODUCTS,
        payload:products
    }
}
// feching products action
export const fechAllProducts=()=>{
    return async(dipatch)=>{
        const response=await fetch(`https://fakestoreapi.com/products`)
        const data=await response.json();
        console.log(data);
       dipatch(getproduct(data))
    }
}


