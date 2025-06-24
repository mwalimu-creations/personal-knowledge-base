import AddOrEditNote from "../../components/Notes/AddOrEditNote";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "./NoteLayout";
export default function AddNote() {
    const { setNotes } = useContext(NoteContext)
    const [noteTitle, setNoteTitle] = useState('')
    const [noteSubtitle, setNoteSubtitle] = useState('')
    const [noteText, setNoteText] = useState('')
    const [noteImages, setNoteImages] = useState('')
    const navigate = useNavigate()

    async function createNote(note) {
        try {
            const res = await fetch('http://localhost:8000/api/notes/', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(note)
            })
            if (!res.ok) throw new Error('failed to create note')
        } catch (error) {
            console.error(error)
        }
    }

    function submit() {
        const newNote = {
            title: noteTitle,
            subtitle: noteSubtitle,
            text: noteText
        }
        createNote(newNote)
        setNotes(prevNotes => [newNote,...prevNotes])
        navigate(`/notes`)
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