import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import '../movieGrid/MovieGrid.scss';

const MovieItem = (props) => {
  const { item, catalog } = props;
  const image = item.poster_path ? `https://image.tmdb.org/t/p/w1280${item.poster_path}` : '';
  const title = item.original_title || item.name;
  return (
    <div className="movies__conteiner__item">
      <div className="movies__conteiner__item__image">
        <img src={image} alt={title} />
        <Link to={`/detail/${item.id}/${catalog}`}>
          <Button className="cart-btn">
            Details
          </Button>
        </Link>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieItem;
