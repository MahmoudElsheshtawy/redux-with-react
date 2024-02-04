import { createSlice } from '@reduxjs/toolkit'


export const bankSlice = createSlice({
  name: 'bank',
  initialState:1000,
  reducers: {
    deposet: (state,action) => {
    return state= state - action.payload
    
    },
    withdrow: (state,action) => {
        return state= state + action.payload
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { withdrow,deposet } = bankSlice.actions

export default bankSlice.reducer