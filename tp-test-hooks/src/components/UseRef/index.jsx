import React, { useImperativeHandle, useRef } from "react";

function UseRef(props,ref) {
  const inputRef = useRef();

  useImperativeHandle(ref,()=>({
    focus:()=>{
        inputRef.current.focus()
    },
    theValue:()=> inputRef.current.value
  }))

  const handleClick = ()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value)    
  }

  return (
    <div>
      <h2>UseRef</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click UseRef</button>
    </div>
  );
}

export default UseRef;
