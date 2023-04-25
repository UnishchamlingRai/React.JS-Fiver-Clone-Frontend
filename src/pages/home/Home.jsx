import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import CatCard from "../../components/CatCard/CatCard";
import Featured from "../../components/featured/Featured";
import ProjectCard from "../../components/ProjectCards/ProjectCards";
import Slide from "../../components/Slides/Slides";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards, projects } from "../../data";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((val) => {
          return <CatCard title={val.title} desc={val.desc} img={val.img} />;
        })}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A Whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
          </div>

          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="features color">
        <div className="container">
          <div className="item">
            <h1>Fiver Business</h1>
            <h1>A business solution designed for teams</h1>
            <h4>
              upgrade to curated experience packed with tools <br />
              and benefits.dedicated to business
            </h4>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
              <img src="./img/check.png" alt="" />
              The best for every budget
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={5} arrowsScroll={5} >
      {projects.map((val)=>{
        return(
          <ProjectCard card={val} key={val.id}/>
        );
      })}
      </Slide>
    </div>
  );
};

export default Home;
