import './ErrorPage.css'
import { MdError } from "react-icons/md";
import { useNavigate, } from 'react-router-dom';
import StyleReactIcons from '../components/StyleReactIcons';
import { useContext } from 'react';
import { AppContext } from './HomeLayout';


export default function ErrorPage() {
    const navigate = useNavigate()
    const { setHasError } = useContext(AppContext)
    
    const handleClick = () => {
        setHasError(false)
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <section className="error-page">
            <StyleReactIcons className={'error-page-icon'}>
                <MdError />
            </StyleReactIcons>
            
            <h1>An error occured</h1>
            <button onClick={handleClick}>{'< Go Back'}</button>
        </section>
    )
}