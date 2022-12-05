import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { MovieCard } from '..';
import './MovieList.scss';

const MovieList = ({ catalog, data }) => {
  return (
    <div className="movie-list">
      <Swiper
        grabCursor
        spaceBetween={50}
        slidesPerView="auto"
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {data.movies.map((item) => {
          return (
            <SwiperSlide key={item.id} className="movie-list-slider">
              <MovieCard item={item} catalog={catalog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default MovieList;
