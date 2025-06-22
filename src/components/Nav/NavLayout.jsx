import './NavLayout.css'
import NavCard from "./NavCard"
import { LuListTodo } from "react-icons/lu"
import { GrProjects } from "react-icons/gr"
import { IoIosJournal } from "react-icons/io"
import { FaBook } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaRegNoteSticky } from "react-icons/fa6";
import personHero from '../../assets/images/person-hero.jpg' 


export default function NavLayout() {
    return (
        <>
            <section className="nav">
                <section className="owner-info">
                <img src={personHero} alt="owner-hero" />
                <p>John Doe</p>
            </section>

            <form action={onsubmit} >
                <input className="search-notes" type="text" name="search-notes"/>
            </form>

            <NavCard
                path='notes'
                linkText='Notes'
            > 
                <FaRegNoteSticky />
            </NavCard>

            <NavCard
                path='to-do-list'
                linkText='To Do List'
            >
                <LuListTodo />
            </NavCard>

            <NavCard
                path='projects'
                linkText='Projects'
            >
                <GrProjects />
            </NavCard>

            <NavCard
                path='journal'
                linkText='Journal'
            >
                <IoIosJournal />
            </NavCard>

            <NavCard
                path='reading-list'
                linkText='Reading List'
            >
                <FaBook />

            </NavCard>

            <NavCard
                path='add-new-folder'
                linkText='Add New Folder'
            >
                <FaFolderPlus />
            </NavCard>

            <NavCard
                path='settings'
                linkText='Settings'
            >
                <CiSettings />
            </NavCard>

            </section>
        </>

    )
}