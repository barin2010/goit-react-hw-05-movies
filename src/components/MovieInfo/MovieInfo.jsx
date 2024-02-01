
import React, {Suspense} from "react";
import css from "./MovieInfo.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import {defaultImg} from "helpers/constants"

 const MovieInfo = ({ movieDetails }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    genres,
  }
  = movieDetails ;


  return (
    <div >
      <div className={css.movieDetails}>
      <img
        className={css.moviePoster}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200${poster_path}`
            : defaultImg
        }
        alt={title}
      />
      <ul className={css.movieInfo}>
        <li className={css.movieTitle}>{title}</li>
        <li className={css.movieRelease}>Release date: {release_date}</li>
        <li className={css.movieRating}>Rating: {vote_average}</li>
        <li className={css.movieOverview}>{overview}</li>
        <li className={css.movieGenres}>
          Genres:{" "}
          {genres.map((genre) => (
            <span key={genre.id} className={css.genre}>
              {genre.name}
            </span>
          ))}
        </li>
        </ul>
        </div>
      <h3 className={css.title}>Additional information</h3>
        
      <ul className={css.navList}>
        <li className={css.navLinkItem}>
          <NavLink className={ css.navLink }to="cast"
          >
          Cast
          </NavLink>
        </li>
        <li className={css.navLinkItem}>
          <NavLink
            className={ css.navLink }
            to="reviews"
          >
          Reviews
          </NavLink>
        </li>
        </ul>
        <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
)
  
}  
export default MovieInfo;

