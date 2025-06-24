import './AddOrEditNote.css'
export default function AddOrEditNote({
    children,
    noteTitle,
    setNoteTitle,
    noteSubtitle,
    setNoteSubtitle,
    noteText,
    setNoteText,
    submit,
}) {
    return (
        <form action={submit} className="note-detail-form">
            <label htmlFor="heading">Heading:
                <input
                    type="text"
                    name="heading"
                    className="heading"
                    id="heading"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
            </label>

            {children}

            <label htmlFor="sub-title">Sub Title:
                <input
                    type="text"
                    name="sub-title"
                    className="sub-title"
                    id="sub-title"
                    value={noteSubtitle}
                    onChange={(e) => setNoteSubtitle(e.target.value)}
                />
            </label>

            <textarea
                name="note-text"
                id="note-text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />

            <input type="submit" className="submit" />
        </form>
    );
}
