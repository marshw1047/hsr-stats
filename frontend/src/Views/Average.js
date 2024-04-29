import Carousel from '../Components/Carousel.js'

function Average() {
    return (
        <div className="bg-[url('../assets/StarRailRes/image/character_portrait/1005.png')] bg-cover bg-center text-gray-100 h-screen px-5 pt-5">
            <h1 className="font-bold text-2xl pb-3">Average Character Stats</h1>
            <p>
                Hoping for this to display stats once the API stuff gets figured out
            </p>

            <Carousel />
        </div>
    )
}

export default Average