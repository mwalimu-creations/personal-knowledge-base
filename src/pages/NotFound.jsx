import './NotFound.css'
import notFoundImg from '../assets/images/page-not-found-svgrepo-com.svg'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <section className="not-found">
            <img src={notFoundImg} alt="page not found" />
            <h1>Sorry! The Page You're Looking For Does Not Exist</h1>
            <Link to='..'>Go Back</Link>
        </section>
    )
}