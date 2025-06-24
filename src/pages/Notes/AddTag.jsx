import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

export default function Input() {
    const navigate = useNavigate()
    const [showInput, setShowInput, tags, setTags] = useOutletContext()
    const [tagName, setTagName] = useState('')
    function submit() {
        setTags(prevTags => [...prevTags, tagName])
        setShowInput(prevShowInput => !prevShowInput)
        navigate('..')
    }
    return (
        <form action={submit}>
            <input type="text" name="tag-name" value={tagName} onChange={(e)=>setTagName(e.currentTarget.value)}/>
        </form>
    )
}