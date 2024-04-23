import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <span className="font-bold py-3 block">
                Menu List
            </span>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu