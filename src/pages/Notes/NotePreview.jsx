import './NotePreview.css'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6"
import { useContext, useEffect, useState } from 'react'
import { NoteContext } from './NoteLayout'
import NoteCardOutline from '../../components/Notes/NoteCardOutline'
import { nanoid } from 'nanoid'

export default function NotePreviewLayout() {
    const {notes} = useContext(NoteContext)
    
    const previews = notes.map(testNote => <NoteCardOutline
        key={nanoid()}
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