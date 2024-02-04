import { configureStore } from '@reduxjs/toolkit'
import bankSlice from './slicellis/bankSlice'
export const store = configureStore({
  reducer: {
    bank:bankSlice,
  },
})