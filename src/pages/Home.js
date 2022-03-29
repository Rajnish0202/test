import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const url = "https://api.tvmaze.com/search/shows?q=all";

function Home({ data }) {
  // const [data, setData] = useState([]);
  // console.log(data);

  // const fetchData = async () => {
  //   try {
  //     const resp = await fetch(url);
  //     const result = await resp.json();
  //     setData(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
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
        // console.log(id, name, first, second, medium);
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
