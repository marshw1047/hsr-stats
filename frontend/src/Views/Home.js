function Home() {
    return (
        <div className="bg-[url('../assets/pics/hsrWpHome.jpg')] bg-cover bg-center text-gray-100 h-screen py-3">
            <div className="font-extrabold text-4xl p-3 px-20 mx-40 text-center bg-black-t-50">Hello!</div>
            <div className="font-bold bg-black-t-50 p-3 px-20 mx-40">About this page:</div>
            <p className="bg-black-t-50 p-3 px-20 mx-40">
                This website shows the stat distributions of character base stats from Honkai: Star Rail! 
                It's currently still under construction so it only shows Jingliu. Enjoy!
            </p>
        </div>
    )
}

export default Home