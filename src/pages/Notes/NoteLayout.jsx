import './NoteLayout.css'
import NotePreview from './NotePreview'
import { createContext, useState, useEffect, useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorPage from '../ErrorPage'
import { AppContext } from '../HomeLayout'

const NoteContext = createContext()
export default function NoteLayout() {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)
   const { setHasError } = useContext(AppContext)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/api/notes/')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching notes')
                return res.json()
            })
            .then(data => {
                setNotes(data)
            })
            .catch(error => {
                setHasError(true)
                console.error(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ?
                <LoadingSpinner /> :
                    <section className="note-section">
                        <NoteContext.Provider value={{ notes, setNotes, }} >
                            <NotePreview />
                            <Outlet />
                        </NoteContext.Provider>

                    </section>
            }

        </>

    )
}

export { NoteContext }