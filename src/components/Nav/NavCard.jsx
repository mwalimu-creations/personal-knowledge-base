import { BsThreeDots } from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom'
import './NavCard.css'

export default function NavCard({ children, path, linkText}) {
    return (
        <NavLink 
        to={path} 
        className={({isActive})=>
            isActive ? 
            `${path} selected nav-card`:
            `${path} nav-card`
        }
        >
            {children}
            <p>{linkText}</p>
            <BsThreeDots className='more-info'/>
        </NavLink>
    )
}