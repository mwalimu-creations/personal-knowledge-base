import './HomeLayout.css'
import { Outlet } from 'react-router-dom'
import NavLayout from "../components/Nav/NavLayout"

export default function HomeLayout() {
    return (
        <>
            <div className="main-page">
                <NavLayout />
                
                <Outlet />
            </div>
        </>
    )
}