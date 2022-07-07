import { useState } from "react"

export default function HookCounter() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <button className="btn" onClick={incrementCount}>Hook Count: {count}</button>
        </div>
    )
}