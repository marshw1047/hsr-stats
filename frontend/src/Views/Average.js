import Carousel from '../Components/Carousel.js'

function Average() {
    return (
        <div className="bg-[url('../assets/StarRailRes/image/character_portrait/1212.png')] bg-cover bg-center text-gray-100 h-screen py-3">
            <h1 className="font-bold text-2xl p-3 px-20 mx-40 bg-black-t-50">Jingliu Base Stats</h1>
            <p className="p-3 px-20 mx-40 bg-black-t-50">
                Below is a carousel with a histogram chart of Jingliu's stats
            </p>
            <Carousel />
        </div>
    )
}

export default Average