import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import fileSlice from "./fileSlices";

// create a slice 

// config the store 
const store= configureStore({
   reducer: {
      file: fileSlice
   },
   devTools: process.env.NODE_ENV !== "production",
})

// export default the store 
export default store

// export the action
// export const fileAction = fileslice.actions