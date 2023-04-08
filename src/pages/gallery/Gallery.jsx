import React from "react";
import "./Gallery.scss";
import cardImg from "../../CardImg";
import Tilt from "react-parallax-tilt";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="title">Gallery</h1>
      <div className="carousel__div">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./home.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img1.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img3.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img4.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img5.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="cards__div">
        {cardImg.map((card) => (
          <Tilt>
            <div className="card" key={card.id}>
              <div className="card card__img">
                <img src={card.img} className="card-img-top" alt="..." />
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
