import './NoteDetail.css'
import { useLocation, Link, Outlet, useParams } from "react-router-dom"
import { NoteContext } from './NoteLayout'
import { useContext, useEffect, useState } from "react"
import { nanoid } from 'nanoid'

export default function NoteDetail() {
    const [showInput, setShowInput] = useState(false)
    const [tags, setTags] = useState([])
    const {id} = useParams()
    const { notes } = useContext(NoteContext)
    const noteDetail = notes ? notes.find(note => String(note.id) === String(id)) : null

    
    useEffect(() => {
        if (noteDetail) {
            setTags(noteDetail.tags)
        }
    }, [tags])

    if (!noteDetail) {
        return <p>No note selected or loading...</p>;
    }


    const tagDisplay = noteDetail.tags ? noteDetail.tags.map(tag => <li key={nanoid()}>{tag}</li>) : null

    function handleClick() {
        setShowInput(prevShowInput => !prevShowInput)
    }



    return (
        <section className="note-detail">
            <hr />
            <h2>{noteDetail.title}</h2>
            <p>Created by: <strong>John Doe</strong></p>
            <p>Last modified: <strong>{noteDetail.date}</strong></p>
            {showInput && <Outlet context={[showInput, setShowInput, tags, setTags]} />}
            <ul className="note-tags">Tags:
                {tagDisplay}
                <li className='add-more-btn'><Link to='add-tag' relative='path' onClick={() => handleClick()}>Add more +</Link></li>
            </ul>
            <h3>{noteDetail.subTitle}</h3>
            <p>{noteDetail.text}</p>
        </section>
    )
}