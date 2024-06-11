import { Link } from "react-router-dom"


export const LinkMenu = ({path="", text=""}) => {
    return (
        <li className="text-3xl hover:underline">
            <Link to={path&&path}>{text && text}</Link>
        </li>
        )
}