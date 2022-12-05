import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Casts } from '..';
import { Videos } from '../../components';

const MOvieOrShowDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { keyword } = useParams();
  const url = `https://api.themoviedb.org/3/${keyword}/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
  useEffect(() => {
    window.scroll(0, 0);
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [id, keyword, url]);

  const image = data.poster_path ? `${`https://image.tmdb.org/t/p/w1280${data.poster_path}`}` : '';
  const bg = `${
    `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` || data.poster_path
  }`;
  const title = data.original_title || data.name;
  const ganres = data.genres ? data.genres : [];

  return (
    <>
      <div>
        <div
          className="detail-banner"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {' '}
        </div>
        <div className="detail__conteiner">
          <div className="detail__conteiner__poster">
            <div
              className="detail__conteiner__poster__image"
              style={{ backgroundImage: `url(${image})` }}
            >
            </div>
          </div>
          <div className="detail__conteiner__content">
            <div className="detail__conteiner__content__title">
              <h1>{title}</h1>
            </div>
            <div className="detail__conteiner__content__ganrs">
              {ganres.map((el) => (
                <Ganres item={el} key={el.id} />
              ))}
            </div>
            <p>{data.overview}</p>
            <div className="detail__conteiner__content__casts">
              <Casts id={id} />
            </div>
          </div>
        </div>
        <Videos id={id} catalog={keyword} />
      </div>
    </>
  );
};

const Ganres = (props) => {
  const { item } = props;
  return (
    <div className="ganre">
      <Link to="/">{item.name}</Link>
    </div>
  );
};

export default MOvieOrShowDetails;
