import React, { useEffect } from "react";
import "./home.css";
import SvgWaveBackgroundBottom from "./SvgWaveBackgroundBottom";
import SvgBlackLiveMatter from "./SvgBlackLiveMatter";
import anime from "animejs/lib/anime.es.js";

function Home() {
  useEffect(() => {

    anime({
      targets: "h1",
      scale: [0.3, 1],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: 1200
    });
  });
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__logoLeft">
          <div className="logo">
            <SvgBlackLiveMatter />
          </div>
        </div>
        <div className="home_content__welcomeTextRight">
          <div className="home__content__heading">
            <h1>BLACK LIVES MATTER</h1>
          </div>
          <div className="home__content__news">
            <p>
              Black Lives Matter May Be the Largest Movement in U.S. History
            </p>
          </div>
          <div className="home__content__quote">
            <p>
              “All humans are descended from Adam and Eve,” said{" "}
              <span>Muhammad (P.B.U.H)</span> in his last known public speech.
              “There is no superiority of an Arab over a non-Arab, or of a
              non-Arab over an Arab, and no superiority of a white person over a
              black person or of a black person over a white person, except on
              the basis of personal piety and righteousness.”
            </p>
          </div>
        </div>
      </div>
      {/* bottom wave */}
      <div className="backgroundSvgWave">
        <SvgWaveBackgroundBottom />
      </div>
    </div>
  );
}

export default Home;
