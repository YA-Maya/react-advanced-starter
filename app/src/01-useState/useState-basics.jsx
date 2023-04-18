import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState basics</h2>
      <p>{count}</p>
      <button type="button" className="btn" onClick={handClick}>
        Click me
      </button>
    </>
  );
};

export default UseStateBasics;
