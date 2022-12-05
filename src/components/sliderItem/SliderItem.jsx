/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import '../slider/Slider.scss';

const SlideItem = (props) => {
  const { item } = props;
  const background = `${`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
  }`;

  return (
    <div
      className={`hero__slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero__slide__item__conteiner">
        <div className="hero__slide__item__content">
          <h1>{item.original_title}</h1>
          <div className="hero__slide__item__content__info">
            <h4>
              <span>HD</span>
            </h4>
            <h3>
              {' '}
              <StarPurple500Icon
                style={{ marginBottom: '2px', color: 'rgb(255, 230, 0)' }}
              />
              {' '}
              {item.vote_average}
            </h3>
            <h4>
              Original Language:
              <span style={{ marginLeft: '10px' }}>
                {item.original_language}
              </span>
            </h4>
          </div>
          <p>{item.overview}</p>
        </div>
        <div className="hero__slide__item__image">
          <img
            src={`${`https://image.tmdb.org/t/p/w1280${item.poster_path}`}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
