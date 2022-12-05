/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Link } from 'react-router-dom';
import { Button } from '..';
import './MovieCard.scss';

const MovieCard = (props) => {
  const { item } = props;
  const background = item.poster_path ? `${`https://image.tmdb.org/t/p/w1280${item.poster_path}`}` : '';
  const { title } = item;

  return (
    <div className="movie-card" style={{ backgroundImage: `url(${background})` }}>
      <Link to={`/detail/${item.id}/${props.catalog}`}>
        <Button className="cart-btn">
          <PlayCircleFilledWhiteIcon className="play" />
        </Button>
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
