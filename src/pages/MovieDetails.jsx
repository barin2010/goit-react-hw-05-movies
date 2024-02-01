import React, {useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { getMovieInfo } from "../services/API";
import  MovieInfo  from "components/MovieInfo/MovieInfo";
import css from "./MovieDetails.module.css";
import {Loader} from "../components/Loader/Loader";


const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
   const backLinkRef = useRef(location.state?.from ?? '/movie');
const [movieDetails, setMovieDetails] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  const fetchMovie = async () => {
    try {
      const movieInfo = await getMovieInfo(movieId);
      setMovieDetails(movieInfo);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchMovie();
}, [movieId]);

  
  
    return (
        <div className={css.movieDetails}>
          {isLoading && <Loader/>}
   {error && <p>Something went wrong...</p>}
        <Link className={css.backLink} to={backLinkRef.current}>Go back</Link>
         <h1 className={css.title}>Movie details</h1>
           {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      </div>
    );
  } 


export default MovieDetails;

