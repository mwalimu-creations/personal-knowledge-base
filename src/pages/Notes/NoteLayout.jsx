import './NoteLayout.css'
import NotePreviewLayout from './NotePreview'
import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { testNotes } from '../../../testNotes'

const NoteContext = createContext()
export default function NoteLayout() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        setNotes(testNotes)
    }, [])

    return (
        <>
            <section className="note-section">
                <NoteContext.Provider value={{ notes, setNotes }} >
                    <NotePreviewLayout />
                    <Outlet />
                </NoteContext.Provider>

            </section>
        </>

    )
}

export { NoteContext }