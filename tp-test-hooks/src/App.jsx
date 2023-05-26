import { useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>show UseEffect</button>
      {show && <UseEffect></UseEffect>}
    </>
  );
}

export default App;
