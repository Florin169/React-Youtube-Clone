import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Content = ({ fetchURL }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchURL);
        setVideo(response.data.items);
        console.log(video);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <section className="main-content">
      {video.map((vid) => {
        return (
          <Link to={`/player/${vid.id.videoId}/${vid.snippet.title}`}>
            <div className="video" key={vid.etag}>
              <img src={vid.snippet.thumbnails.high.url} alt="" />

              <div className="info">
                <div className="channel">
                  <img src="" alt="" />
                </div>
                <div className="title">
                  {vid.snippet.title}
                  <p className="channel-name">{vid.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Content;
