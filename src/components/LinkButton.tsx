import { Link } from "react-router-dom"


export const LinkButton = ({ text = "", path = "" }) => {
    return (
        <Link to={path} className="flex justify-center items-center rounded-xl h-16 min-w-36 bg-primary hover:bg-second text-white text-xl text-center uppercase pl-3 pr-3"> 
                {text}
        </Link>
    )
}