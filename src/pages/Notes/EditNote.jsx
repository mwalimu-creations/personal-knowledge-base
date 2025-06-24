import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { NoteContext } from './NoteLayout'
import AddOrEditNote from '../../components/Notes/AddOrEditNote'

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
        <AddOrEditNote
            noteTitle={noteTitle}
            setNoteTitle={setNoteTitle}
            noteSubtitle={noteSubtitle}
            setNoteSubtitle={setNoteSubtitle}
            noteText={noteText}
            setNoteText={setNoteText}
            submit={submit}
        > 

        </AddOrEditNote>
    )
}