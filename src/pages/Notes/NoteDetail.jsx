import './NoteDetail.css'
import { Link, Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { nanoid } from 'nanoid'
import { NoteContext } from './NoteLayout'
import { AppContext } from '../HomeLayout'



export default function NoteDetail() {
    const navigate = useNavigate()
    const { setHasError } = useContext(AppContext)
    const { setNotes, } = useContext(NoteContext)
    const { id } = useParams()
    const [showInput, setShowInput] = useState(false)
    const [note, setNote, updateNote ] = useOutletContext()
    const [tags, setTags] = useState(note.tags)


    useEffect(() => {
        if (tags != note.tags) {
            const updatedNote = { ...note, tags: tags }
            setNotes(prevNotes => prevNotes.map(prevNote => String(prevNote.id) === String(id) ? updatedNote : prevNote))
            setNote(updatedNote)
            updateNote(updatedNote)
        }

    }, [tags])

    function handleClick() {
        setShowInput(prevShowInput => !prevShowInput)
    }

    async function handleDelete() {
        try {
            const res = await fetch(`http://localhost:8000/api/notes/${id}/`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'DELETE'
            })
            if (!res.ok) throw new Error('Failed to delete')

            navigate('..')
            setNotes(prevNotes => prevNotes.filter(note=>String(note.id) !== String(id)))

        } catch (err) {
            console.error(err)
            setHasError(true)
        }
    }

    const tagDisplay = tags ? tags.map(tag => <li key={nanoid()}>{tag}</li>) : null
    console.log('hi')
    

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
            <button onClick={handleDelete}>delete</button>
        </section>
    )
}