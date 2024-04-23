import Navigation from './Navigation.js'

function Header(){
    return (
        <header className="border-bp-3 flex justify-between items-center p-3">
            <span className="font-bold">
                AppName
            </span>

            <Navigation />
        </header>
    )
}

export default Header