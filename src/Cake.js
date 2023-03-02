import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChocoCake, buyVanillaCake,buyPineAppleCake,addVanillaCake } from './store/cakeSlice'

export default function Cake() {
  const cake = useSelector((state) => state.cake)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
       <h3>Chocolate cakes : {cake.chocoCake}</h3>
       <button onClick={()=>{dispatch(buyChocoCake())}}>Buy Choco Cake</button>

       <h3>vanilla cakes : {cake.vanillaCake}</h3>
       <button onClick={()=>{dispatch(buyVanillaCake())}}>Buy Vanilla Cake</button>
       <button onClick={()=>{dispatch(addVanillaCake(10))}}>Add Vanilla Cakes</button>

       <h3>PineApple cakes : {cake.pineappleCake}</h3>
       <button onClick={()=>{dispatch(buyPineAppleCake())}}>Buy PineApple Cake</button>



      </div>
    </div>
  )
}