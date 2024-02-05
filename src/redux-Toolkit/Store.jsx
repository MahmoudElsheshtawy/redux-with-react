import { configureStore } from '@reduxjs/toolkit'
import bankSlice from './slicellis/bankSlice'
import prodctSlice from './slicellis/ProductSlice'
export const store = configureStore({
  reducer: {
    bank:bankSlice,
    product:prodctSlice,
  },
})