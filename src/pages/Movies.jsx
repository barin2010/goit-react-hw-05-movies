import React, { useState, useEffect } from 'react';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import  MoviesList  from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
   const [previousQuery, setPreviousQuery] = useState('');
   const [error, setError] = useState(null);

  const query = searchParams.get('sQuery');


  useEffect(() => {
    setIsLoading(true);
    if (query && query.trim() !== '') {
      setMovies([]);
      setPreviousQuery(query);
      const searchMovieByQuery = async () => {
        try {
          const data = await getSearchMovies(query);
          if (Array.isArray(data.results)) {
            setMovies(data.results);
          } 
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      searchMovieByQuery();
    }
  }, [query]);
  
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.query.value.trim();
    setSearchParams({
      sQuery: searchValue,
    });
  };
  return (
    <div className={css.container}>
      <SearchMovie onSubmit={handleSearchSubmit}/>
      {previousQuery ? <h2 className={css.previousQuery}>Your previous query: "{previousQuery}"</h2> : <div className={css.info}>Please, enter your query</div>}
      {isLoading && <Loader />}
    <MoviesList movies={movies} />
    {error && <div className={css.info}>Something went wrong...</div>}
    </div>
  );
};

export default Movies;
