 import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const FetchProduct = createAsyncThunk('product/FetchProduct',async()=>{

  const response = await fetch('https://fakestoreapi.com/products')
  const data =await  response.json()
  ;
  console.log(data);

     return data

})
export const prodctSlice = createSlice({
     
    name:'product',
    initialState:[{}],
    reducers:{
       addproduct:(state ,action)=>{
         state =state.push(action.payload)
         console.log(action); 
       }

    },
    extraReducers:(builder)=>{
        builder.addCase(FetchProduct.fulfilled,(state,action)=>{


            
            state =action.payload;
            console.log(state);
        })
    }

})
export const {addproduct} = prodctSlice.actions
export default prodctSlice.reducer;