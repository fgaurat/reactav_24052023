import React, { useEffect, useState } from "react";

function UseEffect() {


    const [count, setCount] = useState(0)


    useEffect(()=>{
        const inter = setInterval(()=>{
            console.log("inc")
            setCount(c=>c+1)
        },1000)
        
        return ()=>{
            console.log("Cleanup")
            clearInterval(inter)
        }
    },[])

    useEffect(()=>{
        document.title = count

    },[count])

    return <div>
    <h2>UseEffect</h2>UseEffect
    <br />
    {count}
  </div>;
}

export default UseEffect;
