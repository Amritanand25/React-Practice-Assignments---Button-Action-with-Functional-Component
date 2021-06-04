import React, { useState } from "react"

function Render()
{
    const [data, setData] = useState('');
 function btnHandler()
 {
  setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.");
 }
 return (
 <div>
    
    <p id="para">{data}</p>
     <button id="click" onClick={btnHandler}>Click</button>
 </div>
 );
}
export default Render;