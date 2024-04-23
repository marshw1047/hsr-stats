import HelloWorld from '../Components/HelloWorld.js'

function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">This is the home page</h1>
            <p>
                Home page contents so probably the only page for now
            </p>

            <HelloWorld name = "User!"/>
        </div>
    )
}

export default Home