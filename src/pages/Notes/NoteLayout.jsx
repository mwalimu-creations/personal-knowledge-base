import './NoteLayout.css'
import NotePreviewLayout from './NotePreview'
import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const NoteContext = createContext()
export default function NoteLayout() {
    const [notes, setNotes] = useState([])
        useEffect(() => {
            fetch('http://localhost:8000/api/notes/')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching notes')
                return res.json()
            })
            .then(data => setNotes(data))
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