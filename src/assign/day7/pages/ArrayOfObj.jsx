import { useState } from "react"

const ArrayOfObj = () => {
  const [movies, setMovies] = useState([
    { name: "Inception", year: 2010, genre: "Sci-Fi", rating: "9.0", movie: { name: "Inception" } },
    { name: "The Dark Knight", year: 2008, genre: "Action", rating: "9.2", movie: { name: "The Dark Knight" } },
    { name: "Interstellar", year: 2014, genre: "Sci-Fi", rating: "8.7", movie: { name: "Interstellar" } },
    { name: "Avengers Endgame", year: 2019, genre: "Action", rating: "8.4", movie: { name: "Avengers Endgame" } },
    { name: "The Matrix", year: 1999, genre: "Sci-Fi", rating: "8.7", movie: { name: "The Matrix" } }
  ])

  const handleClick = (index) => {
    
    let updatedMovies = [...movies]
    
    updatedMovies[index].name = "Dark"
    
updatedMovies[index].movie.name = "Dark"
    
setMovies(updatedMovies)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
       
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🎬 Movie Collection
          </h1>
          <p className="text-gray-600 mt-1">{movies.length} movies available</p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
             
              <div className="text-3xl mb-3">🎥</div>
              
            
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {movie.name}
              </h2>
              
            
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>📅 Year</span>
                  <span className="font-medium">{movie.year}</span>
                </div>
                <div className="flex justify-between">
                  <span>🎭 Genre</span>
                  <span className="font-medium">{movie.genre}</span>
                </div>
                <div className="flex justify-between">
                  <span>⭐ Rating</span>
                  <span className="font-medium text-yellow-600">{movie.rating}</span>
                </div>
              </div>

            
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Movie: </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {movie.movie.name}
                </span>
              </div>

              
              <button
                onClick={() => handleClick(index)}
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArrayOfObj