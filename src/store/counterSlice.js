import { createSlice } from '@reduxjs/toolkit'

// const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState :{
    value: 0
  },
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    setToZero(state){
        state.value = 0;
    }
  },
})

export const { increment, decrement,setToZero } = counterSlice.actions
export default counterSlice.reducer