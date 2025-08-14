import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaDev, FaDatabase } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const jobSummary =
  "I am a final-year undergraduate student at the National Institute of Technology Durgapur, pursuing a B.Tech in Biotechnology. A self-driven, quick starter and passionate programmer, I enjoy tackling complex real-world challenges through competitive programming and web development. I am dedicated to bringing 100% to all my projects and continually expanding my skills in software development.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        {/* Personal Wrapper with LinkedIn and GitHub */}
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateY(50px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
              opacity: 1,
            }}
          >
            {/* <h3>Front End Developer</h3> */}
            <p>{jobSummary}</p>

            <div className="about__content__personalWrapper_x">
            <h2>LinkedIn</h2>
            <a
              href="https://in.linkedin.com/in/nishant-kumar-114b86224?trk=public_profile_browsemap"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin size={60} color="#0077b5" />
              <span>View LinkedIn Profile</span>
            </a>
            </div>

            <div className="about__content__personalWrapper_y">
            <h1>GitHub</h1>
            <a
              href="https://github.com/nishantkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub size={60} color="#333" />
              <span>View GitHub Profile</span>
            </a>
            </div>

          </Animate>
        </div>

        {/* Services Wrapper */}
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateY(50px)",
              opacity: 0,
            }}
            end={{
              transform: "translateY(0)",
              opacity: 1,
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="#ff6347" />
              </div>
              <div>
                <DiAndroid size={60} color="#ff6347" />
              </div>
              <div>
                <FaDatabase size={60} color="#ff6347" />
              </div>
              <div>
                <DiApple size={60} color="#ff6347" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

