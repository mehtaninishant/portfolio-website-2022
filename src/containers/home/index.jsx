import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm <span className="highlight">Nishant Kumar</span>
          <br />
          Competitive Programmer &
          Web Developer
          {/* <br /> */}
        </h1>
      </div>
      <Animate
        play
        duration={1.0}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",  // Corrected to 'translateY' for a smooth vertical animation
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage} className="hire-button">
            Hire Me
          </button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;


