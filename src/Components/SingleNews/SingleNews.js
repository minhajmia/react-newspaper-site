import React from "react";

const SingleNews = ({ news }) => {
  const { title, thumbnail_url, details } = news;
  console.log(news);
  return (
    <>
      <div className="mb-5 shadow-lg">
        <div className="card card-side bg-base-100 shadow-lg">
          <figure>
            <img src={thumbnail_url} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details.slice(0, 100)} ...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
