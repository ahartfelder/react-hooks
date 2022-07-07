import { useEffect } from "react"
import { useState } from "react"

export default function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log('Updated document title')
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button className="btn" onClick={() => setCount(count + 1)}>Click {count} times</button>        
        </div>
    )
}