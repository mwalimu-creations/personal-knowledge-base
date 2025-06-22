import './NoteLayout.css'
import NotePreviewLayout from '../../components/NotePreviews/NotePreviewLayout'
import NoteDetail from './NoteDetail'
import { createContext, useState, useEffect } from 'react'
import { testNotes } from '../../../testNotes'

const NoteContext = createContext()
export default function NoteLayout () {
    const [notes, setNotes] = useState([])
    useEffect(() => setNotes(testNotes), [])


    return (
        <>
        <section className="note-section">
            <NoteContext.Provider value={{notes}} >
                <NotePreviewLayout />
                <NoteDetail />
            </NoteContext.Provider>
            
        </section>
        </>
        
    )
}

export {NoteContext}