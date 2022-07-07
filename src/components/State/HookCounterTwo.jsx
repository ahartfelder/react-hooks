import { useState } from "react"

export default function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)          
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button className="btn btn-red" onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button className="btn" onClick={incrementFive}>Increment 5</button>
            <button className="btn-gray btn" onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}