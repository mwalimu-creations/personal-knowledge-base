import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { Outlet, Link, useParams } from "react-router-dom";
import LoadingSpinner from '../../components/LoadingSpinner'

export default function NoteDetailLayout() {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const [loading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:8000/api/notes/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(data => setNote(data))
            .catch(error => {
                console.error(error)
                setHasError(true)
            })
            .finally(() => setIsLoading(false))
    }, [id])

    async function updateNote(newNote) {
        try {
            const res = await fetch(`http://localhost:8000/api/notes/${id}/`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(newNote)
            })
            if (!res.ok) throw new Error('Failed to update note')

        } catch (error) {
            console.error(error)
            setHasError(true)
        }
    }

    return (
        <>
            {loading ?
                <div className="center">
                    <LoadingSpinner />
                </div> :
                hasError ?
                    <h1>An error occurred</h1>
                    :
                    <section className="note-detail-layout">
                        <Link to='edit-note' className="edit-btn"><MdEdit /></Link>
                        <Outlet context={[note, setNote, updateNote, setHasError]} />
                    </section>
            }
        </>
    )
}