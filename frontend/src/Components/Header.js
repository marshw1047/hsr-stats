import Navigation from './Navigation.js'

function Header(){
    return (
        <header className="flex justify-between items-center px-48 py-5 bg-black bg-opacity-90 shadow-lg">
            <span className="font-bold">
                HSR: Character Stats
            </span>

            <Navigation />
        </header>
    )
}

export default Header