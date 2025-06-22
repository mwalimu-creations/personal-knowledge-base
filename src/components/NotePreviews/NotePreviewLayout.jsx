import './NotePreviewLayout.css'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6"
import { testNotes } from '../../../testNotes'
import { useContext } from 'react'
import { NoteContext } from '../../pages/Notes/NoteLayout'
import NoteCardOutline from './NoteCardOutline'

export default function NotePreviewLayout() {
    const {notes} = useContext(NoteContext)
    const previews = notes.map(testNote => <NoteCardOutline
        key={testNote.id}
        date={testNote.date}
        text={testNote.text}
        heading={testNote.title}
        tags={testNote.tags}
        id={testNote.id}
    />)
    return (
        <>
            <section className="preview">

                <h2>My Notes</h2>

                <Link to='new-note' className="add-new-note">
                    <FaPlus />
                    <p>Add new note</p>
                </Link>

                <section className="note-previews">
                    {previews}
                </section>
                
            </section>
        </>
    )
}