import { useTransition } from "react"
import { useState } from "react"
import NAMES from "./data.json"

export default function Transition() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState()
  const [isPending, startTransition] = useTransition()
  
  const changeHandler = (e) => {
    setInputValue(e.target.value)
    startTransition(() => {
      setQuery(e.target.value)
    })
  }

  const filteredNames = NAMES.filter(name => {
    return name.first_name.includes(query) || name.last_name.includes(query)
  })

  return (
    <>
      <h1>useTransition</h1>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <hr />
      {isPending && <h4>Loading...</h4> }
      <ol>
        {filteredNames.map(name => <li key={name.id}>{name.first_name} {name.last_name} - {name.country}</li> )}
      </ol>
    </>
  )
}