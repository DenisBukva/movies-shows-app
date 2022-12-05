import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiConfig } from '../../common/apis/apiConfig';

const Videos = (props) => {
  const { catalog, id } = props;
  const videoUrl = `https://api.themoviedb.org/3/${catalog}/${id}/videos?api_key=${apiConfig}&language=en-US`;
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios.get(videoUrl).then((response) => {
      setVideo(response.data.results.slice(0, 3));
    });
  }, [videoUrl]);

  return (
    <>
      {video.map((el) => {
        return (
          <div className="video" key={el.id}>
            <div className="video__title">
              <h2>{el.name}</h2>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${el.key}`}
              width="100%"
              height="100%"
              title="video"
            >
            </iframe>
          </div>
        );
      })}
    </>
  );
};

export default Videos;
