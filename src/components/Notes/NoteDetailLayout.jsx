import { MdEdit } from "react-icons/md";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function NoteDetailLayout() {
    return (
        <>
            <section className="note-detail-layout">
                <Link to='edit-note' className="edit-btn"><MdEdit /></Link>
                <Outlet />
            </section>
        </>
    )
}