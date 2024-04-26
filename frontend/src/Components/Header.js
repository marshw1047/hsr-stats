import Navigation from './Navigation.js'

function Header(){
    return (
        <header className="flex justify-between items-center p-3">
            <span className="font-bold">
                HSR: Character Stats
            </span>

            <Navigation />
        </header>
    )
}

export default Header