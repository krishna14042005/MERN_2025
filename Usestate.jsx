import { useState } from "react";
var useState = () =>{
    var [Num,setNum] = useState(0)
    return(
        <div>
            <h1>This is useState Example</h1>
            <button onMouseEnter={() => setNum(num-1)}>-</button>
            <h4>The number is{num}</h4>
            <button onKeyDown={() => setNum(num -1)}>+</button>
            
        </div>
    )
}