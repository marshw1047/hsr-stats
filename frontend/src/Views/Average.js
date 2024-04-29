import Carousel from '../Components/Carousel.js'

function Average() {
    return (
        <div className="bg-[url('../assets/StarRailRes/image/character_portrait/1005.png')] bg-cover bg-center text-gray-100 h-screen px-5 pt-5">
            <h1 className="font-bold text-2xl pb-3">Average Character Stats</h1>
            <p>
                Below is a carousel with a histogram chart of Kafka's stats
            </p>

            <Carousel />
        </div>
    )
}

export default Average