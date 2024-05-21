import { configureStore } from '@reduxjs/toolkit'
import ayatrioReducer from './ayatrioSlice'
export default configureStore({
  reducer: {
    stepData : ayatrioReducer 
  },
})