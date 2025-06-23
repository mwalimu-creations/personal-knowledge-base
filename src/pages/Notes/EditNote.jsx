import './EditNote.css'
import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { NoteContext } from './NoteLayout'

export default function EditNote() {
    const { id } = useParams()
    const { notes, setNotes } = useContext(NoteContext)
    const noteDetail = notes ? notes.find(note => String(note.id) === String(id)) : null
    const [noteText, setNoteText] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const [noteSubtitle, setNoteSubtitle] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (noteDetail) {
            setNoteText(noteDetail.text || '')
            setNoteTitle(noteDetail.title || '')
            setNoteSubtitle(noteDetail.subTitle || '')
        }
    }, [noteDetail])
    

    function submit(formdata) {
        const newNote = {
            ...noteDetail,
            title: noteTitle,
            subTitle: noteSubtitle,
            text: noteText
        }

        setNotes(prevNotes => prevNotes.map(prevNote => String(prevNote.id) === String(id) ? newNote : prevNote))
        navigate('..')
    }   


    if (!noteDetail) {
        return <p>No note selected or loading...</p>;
    }


    return (
        <form
            action={submit}
            className='edit-note-detail'
        >
            <label htmlFor="heading">Heading:
                <input
                    type="text"
                    name='heading'
                    className='heading'
                    id='heading'
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.currentTarget.value)} /></label>
            <label htmlFor="sub-title">Sub Title:
                <input
                    type="text"
                    name='sub-title'
                    className='sub-title'
                    id='sub-title'
                    value={noteSubtitle}
                    onChange={(e) => setNoteSubtitle(e.currentTarget.value)} /></label>
            <textarea
                name="note-text"
                id="note-text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)} />
            <input type="submit" className='submit' />
        </form>
    )
}