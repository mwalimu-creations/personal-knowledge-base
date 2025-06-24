import { ImPower } from "react-icons/im";
import AddOrEditNote from "../../components/Notes/AddOrEditNote";
import { useState, useContext } from "react";
import { NoteContext } from "./NoteLayout";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
export default function AddNote() {
    const {notes, setNotes} = useContext(NoteContext)
    const [noteTitle, setNoteTitle] = useState('')
    const [noteSubtitle, setNoteSubtitle] = useState('')
    const [noteText, setNoteText] = useState('')
    const [noteImages, setNoteImages] = useState('')
    const navigate = useNavigate()
    function submit() {
        const newNote = {
        id: nanoid(),
        noteTitle: noteTitle,
        noteSubtitle: noteSubtitle,
        noteText: noteText
    }
    console.log(newNote)
    setNotes(prevNotes=>[...prevNotes, newNote])
    navigate(`/notes/${newNote.id}`)
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