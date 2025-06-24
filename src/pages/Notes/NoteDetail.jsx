import './NoteDetail.css'
import { useLocation, Link, Outlet, useParams } from "react-router-dom"
import { NoteContext } from './NoteLayout'
import { useContext, useEffect, useState } from "react"
import { nanoid } from 'nanoid'

export default function NoteDetail() {
    const [showInput, setShowInput] = useState(false)
    const [tags, setTags] = useState([])
    const [note, setNote] = useState({})
    const {id} = useParams()
    const { notes } = useContext(NoteContext)

    useEffect(()=>{
        fetch(`http://localhost:8000/api/notes/${id}`)
            .then(res=>{
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(data=>setNote(data))
            .catch(error => console.error(error))
    }, [])
    useEffect(() => {
        if (notes) {
            setNote(notes.find(note => String(note.id) === String(id)))
        }
    }, [notes])

    useEffect(() => {
        if(note) setTags(note.tags)
    }, [note])


    if (!note) {
        return <p>No note selected or loading...</p>;
    }

    console.log(tags)

    const tagDisplay = tags ? tags.map(tag => <li key={nanoid()}>{tag}</li>) : null

    function handleClick() {
        setShowInput(prevShowInput => !prevShowInput)
    }



    return (
        <section className="note-detail">
            <hr />
            <h2>{note.title}</h2>
            <p>Created by: <strong>John Doe</strong></p>
            <p>Last modified: <strong>{note.date}</strong></p>
            {showInput && <Outlet context={[showInput, setShowInput, tags, setTags]} />}
            <ul className="note-tags">Tags:
                {tagDisplay}
                <li className='add-more-btn'><Link to='add-tag' relative='path' onClick={() => handleClick()}>Add more +</Link></li>
            </ul>
            <h3>{note.subTitle}</h3>
            <p>{note.text}</p>
        </section>
    )
}