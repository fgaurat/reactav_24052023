import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'



import { decrement, increment, incrementByAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useSelector((state) => state.counterState.value)
  const dispatch = useDispatch()

 return (

    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>Increment By 10 </button>
        {count}
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
 )
}