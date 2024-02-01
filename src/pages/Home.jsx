import React, { useState, useEffect } from 'react';
import  MoviesList  from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
       getTrendingMovies()
         .then(response => {
           const data = response.data;
           if (data && Array.isArray(data.results)) {
             setMovies(data.results);
           }
         })
         .catch(error => {
          setError(error)
         })
         .finally(() => {
          setIsLoading(false)
         });
       }, []);
     
       return (
         
           <div className={css.container}>
                {isLoading && <Loader/>}
   {error && <p>Something went wrong...</p>}
         <h2 className={css.title}>Only trending today</h2>
   {movies.length >0 &&   <MoviesList movies={movies} />}
       </div>
     );
   };
  
export default Home;