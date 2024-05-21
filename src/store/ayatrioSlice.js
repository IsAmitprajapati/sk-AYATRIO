import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step : 1
}

export const ayatrioSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     handleSetStep : (state,action)=>{
        state.step= action.payload
     }
  },
})

// Action creators are generated for each case reducer function
export const { handleSetStep } = ayatrioSlice.actions

export default ayatrioSlice.reducer