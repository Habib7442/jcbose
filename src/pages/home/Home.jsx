import { React } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
// import cardImg from "../../CardImg";
import latestimg from "../../latestImg";
import Slider from "../../components/slider/Slider";
import Accordian from "../../components/about_school/Accordian";
import Team from "../../components/team/Team";
import achievements from "../../Achievements";
import FeedbackComp from "../../components/feedbackComp/FeedbackComp";
// import NewReleasesIcon from "@mui/icons-material/NewReleases";

const Home = () => {
  return (
    <div className="home">
      <div className="home__innerDiv m-2">
        <div className="p-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            J.C BOSE SENIOR SECONDARY SCHOOL
          </h1>
          <h4 className="text-xl text-gray-600">
            (An English Medium Institute of IX, X, XI & XII)
          </h4>
          <h4 className="text-xl text-gray-600">Stream: Arts & Commerce</h4>
          <h5 className="text-lg text-gray-600">Chowrangee, Katigorah</h5>
        </div>
      </div>

      <div className="m-2">
        <Slider />
      </div>

      <div className="slide-right">
        <Link to="/admission">
          {" "}
          <h3>
            ADMISSION OPEN FOR CLASS IX & HS
            <br /> FIRST YEAR (ARTS & COMMERCE) FOR THE SESSION 2023-24
          </h3>{" "}
        </Link>
        {/* <span>
          <NewReleasesIcon />
        </span> */}
      </div>
      <div className="flex justify-center items-start p-4 space-x-4">
        <div className="w-1/4 hidden lg:block">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li className="mb-2">
              <Link to="/admission" className="text-blue-500 hover:underline">
                Admission
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-blue-500 hover:underline">
                Mission & Vision
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faculty" className="text-blue-500 hover:underline">
                Faculty Members
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-blue-500 hover:underline">
                Why Choose Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/gallery" className="text-blue-500 hover:underline">
                Gallery
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-3/4">
          <Team />
        </div>
      </div>

      <div className="p-4">
        <Accordian />
      </div>

      <h2 className="text-center font-bold text-2xl mb-2">Comparative Result of last 3 years</h2>
      <div className="result">
        {achievements.slice(0,3).map((data) => (
          <img key={data.id} src={data.img} alt="" />
        ))}
      </div>
      <h2 className="text-center font-bold text-2xl mt-3 mb-2">Latest Images of Institute and Events</h2>
      <div className="latest__img">
        {latestimg.map((data) => (
          <img src={data.img} key={data.id} alt="" />
        ))}
      </div>
      <div className="gallery__btn">
        <Link to="gallery">
          <button className="btn btn-info">Gallery</button>
        </Link>
      </div>
      <h2 className="text-center font-bold text-2xl mt-10">Feedback</h2>
      <div>
        <FeedbackComp />
        <div className="flex justify-center items-center">
        <Link to="/allreviews"> <button className="btn btn-info mb-4">All Reviews</button></Link>

        </div>
      </div>



    </div>
  );
};

export default Home;
