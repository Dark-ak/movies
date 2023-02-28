

const Movie = ({ data, set }) => {


    return (
        data.map((movie) => {
            const show = movie.show;
            const { name, genres, summary, rating, image } = show;
            return (
                <div key={show.id} onClick={() => set(show)} className="product flex flex-col m-5 items-center cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 hover:opacity-10 z-10"></div>
                        <img src={image?.medium} alt={name} className="w-[200px] h-[250px] object-cover z-20" />
                        <div className="absolute bottom-0 left-0 p-2 z-30">
                            <p className="text-white font-bold text-lg">{name}</p>
                            <p className="text-white text-sm">{genres.join(', ')}</p>
                            <p className="text-white text-sm">Rating: {rating.average}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Movie