import React from "react";
import "./home.css";
import SvgWaveBackgroundBottom from "./SvgWaveBackgroundBottom";
import SvgBlackLiveMatter from "./SvgBlackLiveMatter";

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__logoLeft">
          <div className="logo">
            <SvgBlackLiveMatter />
          </div>
        </div>
        <div className="home_content__welcomeTextRight">
          <h1>BLACK LIVES MATTER</h1>
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
