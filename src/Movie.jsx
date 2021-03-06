import React from 'react';

export default function Movie({movie}) {
    return (
        <article className="movie">
            <img src={movie.poster_path} />
            <div className="movie__description">
                <h2>{movie.title}</h2>&nbsp;
                <div className="movie__rating" >{movie.vote_average}</div>
                <div className="movie__tagline">{movie.tagline}</div>
                <span className="movie__date">{movie.release_date && movie.release_date.substr(0, 4)}</span>
                <span className="movie__duration">{movie.runtime || 0} min</span>
                <div className="movie__overview">{movie.overview}</div>
            </div>
        </article>
    );
}