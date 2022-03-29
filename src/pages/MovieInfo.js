import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const getLocalStorage = () => {
  let list = localStorage.getItem("details");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("details")));
  } else {
    return [];
  }
};

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [list, setList] = useState(getLocalStorage);
  const [show, setShow] = useState(false);
  const [book, setBook] = useState({
    name: "",
    language: "",
    count: "",
  });

  // console.log(list);

  // console.log(movie);
  // console.log(id);

  const movieData = useCallback(async () => {
    try {
      const resp = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const result = await resp.json();
      setMovie(result);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    movieData();
  }, [movieData, id]);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(movie));
  }, [movie]);

  const editHandler = () => {
    setShow(true);
  };

  return (
    <div className='singleInfo'>
      {movie && (
        <div className='singleInfoContainer'>
          <div className='imageBox'>
            <img src={movie.image.medium} alt={movie.name} />
          </div>
          <div className='content'>
            <p className='name'>
              Name: <span>{movie.name}</span>
            </p>
            <p className='summary'>
              Summary:{" "}
              <span>{movie.summary.slice(3, movie.summary.length - 4)} </span>
            </p>
            <p>
              Language: <span>{movie.language}</span>
            </p>
            <p className='genres'>
              Genres:
              <span>{movie.genres[0]}</span>
              <span>{movie.genres[1] ? movie.genres[1] : ""}</span>
            </p>
            <p className='official'>
              Official Site: <span>{movie.officialSite}</span>
            </p>
            <p className='rating'>
              Rating: <span>{movie.rating.average}</span>
            </p>
            <div className='btnContainer'>
              <Link to='/'>
                <button>Back</button>
              </Link>
              <button onClick={editHandler}>Book Ticket</button>
            </div>
          </div>
        </div>
      )}

      {show && (
        <div className='bookLayout'>
          <div className='bookContainer'>
            <div className='heading'>
              <h3>Book Your Ticket</h3>
            </div>
            <div className='orderContent'>
              <input
                type='text'
                className='form-control'
                placeholder='Name...'
                value={list.name}
                onChange={(e) => setBook({ ...list, name: e.target.value })}
              />
              <input
                type='text'
                className='form-control'
                placeholder='Language...'
                value={list.language}
                onChange={(e) => setBook({ ...list, language: e.target.value })}
              />
              <input
                type='number'
                className='form-control'
                placeholder='Number of Tickets...'
                onChange={(e) => setBook({ ...list, count: e.target.value })}
              />
              <div className='btnContainer'>
                <button>Confirm</button>
                <button onClick={() => setShow(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
