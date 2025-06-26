import { useState, useEffect, useContext } from "react";
import { MdEdit } from "react-icons/md";
import { Outlet, Link, useParams, } from "react-router-dom";
import { AppContext } from "../../pages/HomeLayout";
import LoadingSpinner from '../../components/LoadingSpinner'

export default function NoteDetailLayout() {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const [loading, setLoading] = useState(false)
    const { setHasError } = useContext(AppContext)

    useEffect(() => {
        setLoading(true)
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
            .finally(() => setLoading(false))
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
                </div>
                :
                <section className="note-detail-layout">
                    <Link to='edit-note' className="edit-btn"><MdEdit /></Link>
                    <Outlet context={[note, setNote, updateNote]} />
                </section>
            }
        </>
    )
}