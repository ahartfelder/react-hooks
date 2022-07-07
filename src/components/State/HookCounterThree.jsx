import { useState } from "react"

export default function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <form>
            <input type="text" value={name.firstName} onChange={event => setName({ ...name, firstName: event.target.value })} />
            <input type="text" value={name.lastName} onChange={event => setName({ ...name, lastName: event.target.value })} />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your first name is - {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}