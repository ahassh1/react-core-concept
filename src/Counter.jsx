import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);
    const handleAdd = ()=>{
        const newCount = count +1;
        setCount(newCount)

    }
    const counterStyle={
        border: '3px solid purple'
    }

    return(
        <div  style={counterStyle}>
            {
                count> 5 && <p>your score more than 5</p>
            }
        <h3>Count: {count}</h3>
        <button onClick={handleAdd}> Add</button>
    </div>
)
}