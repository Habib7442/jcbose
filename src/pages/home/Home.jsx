import { React } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import cardImg from "../../CardImg";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const Home = () => {
  return (
    <div className="home">
      <div className="home__innerDiv">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="title">
          <h1 className="schoolTitle">J.C BOSE SENIOR SECONDARY SCHOOL</h1>
          <h4 className="schoolTitle">
            (An English Medium Institute of IX, X, XI & XII)
          </h4>
          <h4 className="schoolTitle">Stream: Arts & Commerce</h4>
          <h5 className="schoolTitle">Chowrangee, Katigorah</h5>
        </div>
      </div>
      <div className="carousel__div">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img22.jfif"
                className="d-block w-100 carousel__img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
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
      <div className="slide-right">
        <Link to="/admission"> <h3>Admission Open</h3> </Link>
        <span>
          <NewReleasesIcon />
        </span>
      </div>
      <div className="principal__message">
        <div className="left">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/about">Mission & Vision</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty Members</Link>
            </li>
            <li>
              <Link to="/about">Why Choose Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="center">
          <img
            style={{ width: "10rem", height: "14rem" }}
            src="./president2.png"
            alt=""
          />
          <img
            style={{ width: "10rem", height: "14rem" }}
            src="./didarul.png"
            alt=""
          />
          <img
            style={{ width: "10rem", height: "14rem" }}
            src="./aah.png"
            alt=""
          />
        </div>
        <div className="right">
          <h3>About Institute</h3>
          <p>
            J.C Bose Senior Secondary School, situated at Chowrangee, Katigorah-
            788804 is one of the most promising institution of the Katigorah and
            also the entire Barak Valley imparting quality education at High
            School and Higher Secondary levels. The Senior Secondary School
            erstwhile junior college was found on 10th November in the year
            2015. It is a non-government institution started with an enrollment
            of 150 students. This college was established in the name of Acharya
            Jagadish Chandra Bose, who is known as the father of Bengali science
            fiction.
            <Link to="/about">Continue...</Link>
          </p>
        </div>
      </div>
      <div className="about">
        <h2 className="about__title">Why Choose Us ?</h2>
        <ul>
          <li>We provide well researched study materials.</li>
          <li>
            We have well qualified, experienced and dedicated faculty members.
          </li>
          <li>We assure you to not requirement of extra private tuition</li>
          <li>We promise you to accelerate your academic career.</li>
          <li>We have Safe campus for girl students.</li>
          <li>
            We conduct Weekly evaluation which can improve the students
            performance.
          </li>
          <li>We organize Regular Parent, Teacher and Management meeting</li>
          <li>We have track record of 100 % pass since inception.</li>
          <li>We provide scholarship to meritorious students</li>
        </ul>
      </div>

      <h2 className="result__title">Comparative Result of last 3 years</h2>
      <div className="result">
        <img src="./img16.jfif" alt="" />
        <img src="./img17.jfif" alt="" />
        <img src="./img18.jfif" alt="" />
      </div>
      <h2 className="latest__picture">Latest Images of Institute and Events</h2>
      <div className="latest__img">
        {cardImg.slice(0, 4).map((data) => (
          <img src={data.img} key={data.id} alt="" />
        ))}
      </div>
      <div className="gallery__btn">
        <Link to="gallery">
          <button className="btn btn-info">Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
