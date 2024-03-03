import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  const actualizar = () => {
    setCount(0);
  };

  return (
    <div style={{display:"flex", flexDirection: "column", gap: "20px"}}>
      <div>
        <button onClick={restar}>restar 1</button>
        <button onClick={actualizar}>actualizar a 0</button>
        <button onClick={sumar}>sumar 1</button>
      </div>

      <strong style={{fontSize: "30px"}}>{count}</strong>
    </div>
  );
};

export default Counter;
