import React from "react";
import { Link } from "react-router-dom";

function Home({ data }) {
  return (
    <div className='container'>
      {data.map((item) => {
        const {
          show: {
            id,
            name,
            genres: [first, second],
            image: { medium },
          },
        } = item;
        return (
          <div className='movieBox' key={id}>
            <div className='image'>
              <img src={medium} alt={name} />
            </div>
            <div className='content'>
              <p className='name'>{name}</p>
              <p className='genres'>
                {first} <span>{second ? second : ""}</span>
              </p>
              <div className='button'>
                <Link to={`/movie/${id}`}>
                  <button>View More</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
