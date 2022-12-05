/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import {
  SlideItem,
} from '..';
import { apiConfig } from '../../common/apis/apiConfig';
import './Slider.scss';

const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiConfig}&page=1`;

const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.results.slice(0, 5));
    });
  }, []);

  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        grabCursor
        autoplay={{ delay: 3000 }}
        loop
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideItem
                item={item}
                className={` ${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
