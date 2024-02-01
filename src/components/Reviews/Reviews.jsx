import React, { useEffect, useState } from "react";
import { getMovieReviews } from "services/API";
import { useParams } from 'react-router-dom';
import css from "../Reviews/Reviews.module.css"
const Reviews = () => {
    const { movieId } = useParams();
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const results = await getMovieReviews(movieId);
                setResults(results);
                
            } catch (error) {
                console.log(error);
            }
        };
              
        fetchReviews();
    }, [movieId]);

    
    return (
        <div>
            { results.length === 0 && <p className={css.info}>We don't have any reviews for this movie</p>}
                <ul className={css.Reviews}>
                    {results.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h3>{author}</h3>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
        </div>
    );
}
export default Reviews;