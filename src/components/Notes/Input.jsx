import { useOutletContext } from "react-router-dom"

export default function Input() {
    const [showInput, setShowInput] = useOutletContext()
    return (
        <form>
            <input type="text" name="tag-name"/>
        </form>
    )
}