import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = ({ text }) => {
  const [video, setVideo] = useState([]);
  console.log(text);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyDYHt3ywsdbNsLpZtJCyctXI5ZIImQ9plM`
      );
      setVideo(response.data.items);
      console.log(video);
    }
    fetchData();
  }, [text]);
  return (
    <section>
      <div className="suggestions">
        {video.map((vid) => {
          return (
            <Link to={`/player/${vid.id.videoId}/${vid.snippet.title}`}>
              <div className="suggestions-vid" key={vid.etag}>
                <img src={vid.snippet.thumbnails.high.url} alt="" />
                <div className="info-search">
                  <h1>{vid.snippet.title}</h1>
                  <p className="channel-search">{vid.snippet.channelTitle}</p>
                  <p className="description">{vid.snippet.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
