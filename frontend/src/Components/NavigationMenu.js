import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <span className="font-bold py-3 block font-bold text-4xl">
                Menu
            </span>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-white py-3 border-black border-t block"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <Link 
                        to="/average" 
                        className="text-white py-3 border-black border-t block"
                        onClick={props.closeMenu}
                    >
                        Honkai Star Rail: Character Base Stats
                    </Link>
                <li>
                    <Link 
                        to="/about" 
                        className="text-white py-3 border-black border-t block"
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