import Greeting from '../Components/Greeting.js'

function Home() {
    return (
        <div className="bg-[url('../assets/pics/hsrHomeBg2.png')] bg-cover bg-center text-gray-100 h-screen px-5 pt-5">
            <h1 className="font-bold text-2xl mb-3">This is the home page</h1>
            <p>
                Home page contents so probably the only page for now
            </p>

            <Greeting name = "User!"/>
        </div>
    )
}

export default Home