import { useContext, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import AddOrEditNote from '../../components/Notes/AddOrEditNote'
import { NoteContext } from "./NoteLayout"

export default function EditNote() {
    const { id } = useParams()
    const { setNotes } = useContext(NoteContext)
    const [note, setNote, updateNote] = useOutletContext()
    const [noteText, setNoteText] = useState(note.text || '')
    const [noteTitle, setNoteTitle] = useState(note.title || '')
    const [noteSubtitle, setNoteSubtitle] = useState(note.subtitle || '')
    const navigate = useNavigate()

    function submit() {
        const newNote = {
            ...note,
            title: noteTitle,
            subtitle: noteSubtitle,
            text: noteText
        }

        setNote(newNote)
        setNotes(prevNotes=>prevNotes.map( prevNote=>String(prevNote.id) === String(id) ? newNote : prevNote))
        updateNote(newNote)
        navigate('..')
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