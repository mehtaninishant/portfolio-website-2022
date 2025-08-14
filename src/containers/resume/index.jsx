import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './styles.scss';
import { MdWork } from 'react-icons/md';
import { AiOutlineFilePdf } from "react-icons/ai"; // Add PDF icon

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      {/* Resume PDF Icon */}
      <div className="resume__pdf-link">
        <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
          <AiOutlineFilePdf size={80} color="var(--yellow-theme-main-color)" />
        </a>
      </div>

      <h2>------------Download Resume</h2>
      
      <div className="timeline">
        {/* Experience Section */}
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                date={item.date} // Use dynamic date
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
