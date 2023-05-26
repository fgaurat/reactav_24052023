import React, { useState } from "react";


const useIncrement=() =>{
    const [cpt,setCpt] = useState(0)
    const inc = ()=>setCpt(c => c+1)
    const dec = ()=>setCpt(c => c-1)

    return [cpt,inc,dec]
}

function UseCustomHook() {

    const [cptValue,incCpt,decCpt] = useIncrement()

  return (
    <div>
      <h2>UseCustomHook</h2>
      cptValue : {cptValue}
      <button onClick={() => incCpt()}>inc</button>
      <button onClick={() => decCpt()}>dec</button>
    </div>
  );
}

export default UseCustomHook;
