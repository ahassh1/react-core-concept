import { useState } from "react"
 
export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleBtnClick = () => {
        const newRuns  = runs + 1;
        setRuns(newRuns)

        const newsix = sixes + 6;
        setSixes(newsix)
    }
    
    return(
    <div>
        <p><small>sixes: {sixes}</small></p>
        {
           sixes >= 6 && <h3> bang you are hit a big six</h3>
        }
        <p>
            Polash: {runs}
        </p>

        <button onClick={ handleBtnClick}>click me</button>
    </div>
)
}