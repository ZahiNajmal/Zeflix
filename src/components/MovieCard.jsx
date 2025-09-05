import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useState, useEffect } from "react";
import TrailerModal from "./TrailerModal";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    // Fetch trailer from TMDB
    useEffect(() => {
        async function fetchTrailer() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=491aac8eab30f734b75d766ca28b58c8&language=en-US`
                );
                const data = await res.json();
                const trailer = data.results.find(
                    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
                );
                if (trailer) setTrailerKey(trailer.key);
            } catch (err) {
                console.error("Error fetching trailer:", err);
            }
        }

        fetchTrailer();
    }, [movie.id]);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <>
            <div className="movie-card" onClick={() => trailerKey && setShowTrailer(true)}>
                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="movie-overlay">
                        <button
                            className={`favorite-btn ${favorite ? "active" : ""}`}
                            onClick={(e) => { e.stopPropagation(); onFavoriteClick(e); }}
                        >
                            ♥
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>

            {showTrailer && (
                <TrailerModal
                    trailerUrl={`https://www.youtube.com/embed/${trailerKey}`}
                    onClose={() => setShowTrailer(false)}
                />
            )}
        </>
    );
}

export default MovieCard;
