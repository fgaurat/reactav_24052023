import React, { useState, useLayoutEffect, useRef } from 'react';

const UseLayoutEffect = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  
  
  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
    <h2>UseLayoutEffect</h2>
    <div ref={ref}>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
    </>
  );
};

export default UseLayoutEffect;
