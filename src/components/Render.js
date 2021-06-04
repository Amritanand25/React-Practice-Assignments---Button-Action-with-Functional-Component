import React, { useState } from "react"

function Render()
{
    const [data, setData] = useState('');
 function btnHandler()
 {
  setData(
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      );
 }
 return (
 <> 
    {data}
     <button id="click" onClick={btnHandler}>Click</button>
 </>
 );
}
export default Render;