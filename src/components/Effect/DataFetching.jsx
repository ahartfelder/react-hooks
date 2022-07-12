import { useEffect, useState } from "react"
import axios from "axios"

export default function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const clickHandler = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [idFromBtnClick])
    
    return (
        <>
            <h1>Data Fetching with useEffect</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={clickHandler}>Fetch Post</button>
            <h3>{post.title}</h3>
        </>
    )
}