import { IconContext } from "react-icons";

export default function StyleReactIcons({children, className}) {
    return (
        <IconContext.Provider value={{className : className}}>
            {children}
        </IconContext.Provider>
    )
}