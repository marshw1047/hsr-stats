import Carousel from '../Components/Carousel.js'

function Average() {
    return (
        <div className="bg-[url('../assets/StarRailRes/image/character_portrait/1212.png')] bg-cover bg-center text-gray-100 h-screen px-5 pt-5">
            <h1 className="font-bold text-2xl pb-3">Jingliu Base Stats</h1>
            <p>
                Below is a carousel with a histogram chart of Jingliu's stats
            </p>

            <Carousel />
        </div>
    )
}

export default Average