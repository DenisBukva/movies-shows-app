import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiConfig } from '../../common/apis/apiConfig';
import '../MovieOrShowDetails/Details.scss';

const Casts = (props) => {
  const [casts, setCasts] = useState([]);
  const { id } = props;
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiConfig}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCasts(response.data.cast.slice(0, 5));
    });
  }, [url]);

  return (
    <>
      {casts.map((el) => {
        return (
          <div key={el.id} className="cast-wrap">
            <img
              src={el.profile_path ? `${`https://image.tmdb.org/t/p/w1280${el.profile_path}`}` : ''}
              alt=""
            />
            <p>{el.original_name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Casts;
