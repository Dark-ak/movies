

const Movie = ({ data, set }) => {
    return (
        data.map((movie) => {
            const show = movie.show;
            const { name, genres, summary, rating, image } = show;
            return (
                <div key={show.id} onClick={() => set(show)} className=" product flex flex-col w-[200px]  items-center cursor-pointer hover:shadow-2xl hover:translate-x-2 hover:shadow-slate-400 mb-2 duration-500">
                    <div className="flex flex-col items-center ">
                        <div className="w-[200px]">
                            <img src={image?.medium} alt={name} />
                        </div>
                        <div className="flex flex-col items-center border-2 border-solid border-t-0 w-[200px] border-gray-300">
                            <p className="text-xl font-semibold">{name}</p>
                            <p className="text-sm text-gray-500">{genres.join(', ')}</p>
                            <p className="text-sm text-gray-500">Rating: {rating.average}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Movie