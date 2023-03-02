import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,setToZero } from './store/counterSlice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button onClick={()=>{dispatch(setToZero())}}>Set To Zero</button>
      </div>
    </div>
  )
}