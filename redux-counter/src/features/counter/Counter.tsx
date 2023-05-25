import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'



import { decrement, increment } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

 return (

    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        {count}
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
 )
}