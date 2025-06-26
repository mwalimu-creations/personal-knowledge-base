import './HomeLayout.css'
import { Outlet } from 'react-router-dom'
import NavLayout from "../components/Nav/NavLayout"
import ErrorPage from './ErrorPage'
import { createContext, useState } from 'react'

const AppContext = createContext()
export default function HomeLayout() {
     const [hasError, setHasError] = useState(false)
    return (
        <AppContext.Provider value={{setHasError}}>

            <div className="main-page">
                <NavLayout />
                {hasError ? 
                <ErrorPage />
                :<Outlet />}
            </div>
        </AppContext.Provider>
    )
}

export {AppContext}