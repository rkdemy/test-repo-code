import React from "react";
import styled from "styled-components";
const Card = ({ show }) => {
  console.log(show);
  return (
    <div>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w500/${
          show.backdrop_path || show.poster_path
        }`}
        alt={show.name}
      />
      <div className="text-container">
        <div className="icon-container">
          <div className="icon-group-1">
            <span
              // to={`/${movie.id}`}
              className="material-symbols-outlined play"
            >
              play_circle
            </span>
            <span
              className="material-symbols-outlined add"
              // onClick={() => storeShowData(movie)}
            >
              add_circle
            </span>
            <span className="material-symbols-outlined thumb">recommend</span>
          </div>
          <div className="icon-group-2">
            <span
              className="material-symbols-outlined"
              // onClick={() => toggleModal(movie, medium)}
            >
              arrow_drop_down_circle
            </span>
          </div>
        </div>
        <div className="info-container">
          <p className="match">{show.vote_average * 10}% Match</p>
          <p className="restriction">MA +15</p>
          <p>{show.first_air_date}</p>
        </div>
        <div className="genre-container">
          {/* <p>{genre.join(`• `)}</p> */}
          <p style={{ color: "white" }}>{show.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
