import React, { useMemo, useState } from 'react'


const longWork = (t=500)=>{
    console.log("start longWork")
    const end = Date.now()+t
    while(Date.now()<end){}
    console.log("end longWork")
}

const toUpper=(value)=>{
    longWork()
    return value.toUpperCase()
}


function UseMemo() {

    const [a, setA] = useState("")
    const [b, setB] = useState("")

    // const bUpper = toUpper(b)
    const bUpper = useMemo( () => toUpper(b),[b])
  return (
    <div>
        <h2>UseMemo</h2>
        a : <input type="text" value={a} onChange={(e)=>setA(e.target.value)}/><br/>
        b : <input type="text" value={b} onChange={(e)=>setB(e.target.value)}/><br/>

        a : {a}<br/>
        bUpper : {bUpper}<br/>
    </div>
  )
}

export default UseMemo