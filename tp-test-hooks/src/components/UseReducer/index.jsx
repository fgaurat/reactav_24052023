import React, { useReducer } from 'react'


const reducer=(state,action)=>{
    switch(action.type){
        case "inc":
            return {count:state.count+1}
        case "dec":
            return {count:state.count-1}
        default:
            throw new Error()
    }
}



function UseReducer() {
    
    const initialState = {count:0}
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>UseReducer</h2>
        
        count : {state.count}

        <button onClick={() => dispatch({type:'inc'})}>inc</button>
        <button onClick={() => dispatch({type:'dec'})}>dec</button>
    </div>

  )
}

export default UseReducer