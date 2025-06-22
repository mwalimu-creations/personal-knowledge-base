import { useLocation } from "react-router-dom"
import { NoteContext } from './NoteLayout'
import { useContext } from "react"

export default function NoteDetail() {
    const location = useLocation()
    const {notes} = useContext(NoteContext)
    const noteDetail = location.state?.id ? notes.find(note => note.id === location.state?.id) : notes[0]
    if (!noteDetail) {
        return <p>No note selected or loading...</p>;
    }
    const tags = noteDetail.tags ? noteDetail.tags.map(tag=><li>{tag}</li>):null
    return (
        <section className="note-detail">
            <h1>{`My Notes > ${noteDetail.title}`}</h1>
            <hr />
            <h2>{noteDetail.title}</h2>
            <p>Created by: <strong>John Doe</strong></p>
            <p>Last modified: <strong>{''}</strong></p>
            <ul className="note-tags">Tags: {tags}</ul>
            <h3>{noteDetail.subTitle}</h3>
            <p>{noteDetail.text}</p>
        </section>
    )
}