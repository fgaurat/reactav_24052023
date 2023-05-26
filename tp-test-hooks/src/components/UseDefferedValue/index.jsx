import React, { useState, useEffect, useDeferredValue } from 'react';

function longWork(t = 500) {
  console.log("longWork");
  const end = Date.now() + t;
  while (Date.now() < end) {}
  console.log("end longWork");
}

function UseDeferredValue() {
  const [count, setCount] = useState(0);
  
  // Différer la mise à jour de la valeur de count pour rendre l'interface utilisateur réactive
  const deferredCount = useDeferredValue(count);

  useEffect(() => {
    longWork();
  }, [deferredCount]);

  // useEffect(() => {
  //   longWork();
  // }, [count]);

  return (
    <div>
      <h2>UseDeferredValue</h2>
      <p>You clicked count : {count} times</p>
      <p>You clicked deferredCount : {deferredCount} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseDeferredValue;
