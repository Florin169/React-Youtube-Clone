import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleVideo = () => {
  const { videoId, title } = useParams();
  console.log(videoId);

  return (
    <section className="single-video">
      <div className="player">
        <iframe
          width="1300"
          height="700"
          frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
        <h1>{title}</h1>
      </div>
      {/* <div className="suggestions">
        {video.map((vid) => {
          return (
            <Link to={`/player/${vid.id.videoId}/${vid.snippet.title}`}>
              <div className="suggestions-vid" key={vid.etag}>
                <img src={vid.snippet.thumbnails.high.url} alt="" />
                <div className="info">
                  <h1>{vid.snippet.title}</h1>
                  <p>{vid.snippet.cannelTitle}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}
    </section>
  );
};

export default SingleVideo;
