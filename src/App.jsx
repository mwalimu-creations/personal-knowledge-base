import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import NoteLayout from './pages/Notes/NoteLayout'
import NoteDetail from './pages/Notes/NoteDetail'
import NoteDetailLayout from './components/Notes/NoteDetailLayout'
import EditNote from './pages/Notes/EditNote'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route path='*'>
                        <Route path='notes' element={<NoteLayout />}>
                            <Route path='new-note' />
                            <Route path=':id' element={< NoteDetailLayout />}>
                                <Route index element={<NoteDetail />}/>
                                <Route path='edit-note' element={< EditNote/>}/>
                            </Route>
                        </Route>
                        <Route path='to-do-list' />
                        <Route path='projects' />
                        <Route path='journal' />
                        <Route path='reading-list' />
                        <Route path='add-new-folder' />
                        <Route path='settings' />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}