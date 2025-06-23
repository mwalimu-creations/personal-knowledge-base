import './NoteCardOutline.css'
import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid'

export default function NoteCardOutline(props) {
    const tags = props.tags ? props.tags.map(tag => <li key={nanoid()}>{tag}</li>) : null
    return (
        <NavLink
            to={`${props.id}`}
            className={({ isActive }) => isActive ? 'selected note-card' : 'note-card'}
        >
            <p className='date'>{props.date}</p>
            <h2>{props.heading}</h2>
            <p className='text'>{props.text}</p>
            <ul>{tags}</ul>

        </NavLink>
    )
}


