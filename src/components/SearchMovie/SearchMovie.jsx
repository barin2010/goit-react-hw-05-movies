import React from 'react';
import css from './SearchMovie.module.css';

export const SearchMovie =  ({onSubmit}) => {

  return (
    <div className={css.container}>
     <form className={css.form} onSubmit={(e) => onSubmit(e)}>
        <input className={css.input}
          type="text"
          name="query"
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      
  </div>
  )
};
