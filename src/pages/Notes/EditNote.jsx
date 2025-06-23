import { useContext } from "react"
import {NoteContext} from './NoteLayout'

export default function EditNote() {
    // TODO: get the note with the given detail
    function submit(formdata) {
        setIsEditing(false)
    }

    function preventEnterSubmit(e) {
        if (e.target.tagName === 'INPUT') e.preventDefault()
    }
    return (
        <form
                    action={submit}
                    className='edit-note-detail'
                    onKeyDown={(e) => preventEnterSubmit(e)}
                >
                    <label htmlFor="heading">Heading:
                        <input type="text" name='heading' className='heading' id='heading' defaultValue={noteDetail.title} /></label>
                    <label htmlFor="sub-title">Sub Title:
                        <input type="text" name='sub-title' className='sub-title' id='sub-title' defaultValue={noteDetail.subTitle} /></label>
                    <textarea name="" id="" defaultValue={noteDetail.text} rows={4} />
                    <input type="submit" />
                </form>
    )
}