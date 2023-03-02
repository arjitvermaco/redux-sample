import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    chocoCake : 5,
    vanillaCake: 10,
    pineappleCake : 10
 }

const cakeSlice = createSlice({
  name: 'cake',
  initialState ,
  reducers: {
    buyChocoCake(state){
        state.chocoCake -= 1
    },
    buyVanillaCake(state){
        state.vanillaCake -= 1

    },
    buyPineAppleCake(state){
        state.pineappleCake -= 1
    },
    addVanillaCake(state,payload){
        state.vanillaCake = state.vanillaCake + payload.payload
    }

  },
})

export const { buyChocoCake, buyVanillaCake,buyPineAppleCake,addVanillaCake } = cakeSlice.actions
export default cakeSlice.reducer