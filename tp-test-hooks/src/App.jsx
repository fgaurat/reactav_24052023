import { useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import { PureComponent01, PureComponent02 } from "./components/PureComponent";
import UseRef from "./components/UseRef";

function App() {
  const [show, setShow] = useState(false);
  const childRef = useRef()
  const theValue = "Une valeur"
  
  // const onClickPureComponent02 = ()=>{
  //   console.log("onClickPureComponent02")
  // }

  // const onClickPureComponent02 = useMemo(()=>{
  //   return ()=>{
  //     console.log("onClickPureComponent02")
  //   }
  // },[])
  
  const onClickPureComponent02 = useCallback(()=>{
    console.log("onClickPureComponent02")
  },[])

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>show UseEffect</button>
      {show && <UseEffect></UseEffect>}
      <hr />
      <UseReducer />
      <hr />
      <UseMemo />
      <hr />
      <PureComponent01 value={theValue}/>
      <PureComponent02 onClick={onClickPureComponent02}/>
      <hr />
      <UseRef ref={childRef}/>
    </>
  );
}

export default App;
