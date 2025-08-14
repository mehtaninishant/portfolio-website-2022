// import { Circle } from "rc-progress";
// import React from "react";
// import { Animate, AnimateKeyframes } from "react-simple-animate";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import './styles.scss';

// const skillsData = []; // Removed all skills

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<div className="nishant-icon">Nishant</div>}
//       />

//       <h2>Competitive Programming</h2>
      
//       {/* Competitive programming icons */}
//       <div className="competitive-programming-icons">
//         <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
//           <img src="https://styles.redditmedia.com/t5_33o1k/styles/communityIcon_xcagst8qta391.png" alt="Codeforces" />
//           <span className="icon-text">My Codeforces Profile</span>
//         </a>
//         <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">
//           <img src="https://pbs.twimg.com/media/EBvl9IXXUAAztHs.png" alt="CodeChef" />
//           <span className="icon-text">My CodeChef Profile</span>
//         </a>
//         <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3Ir9453MFZjzGK8jeX9en0kjW8igj-FTNg&s" alt="LeetCode" />
//           <span className="icon-text">My LeetCode Profile</span>
//         </a>
//         <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUBbiOSMI3WxCPiIJFgced1EMOa5QOSwdqg&s" alt="GeeksforGeeks" />
//           <span className="icon-text">My GeeksforGeeks Profile</span>
//         </a>
//       </div>

//       <div className="skills__content-wrapper">
//         {skillsData.length === 0 ? (
//           <h3>No skills available</h3> // Message when no skills are available
//         ) : (
//           skillsData.map((item, i) => (
//             <div key={i} className="skills__content-wrapper__inner-content">
//               <Animate
//                 play
//                 duration={1}
//                 delay={0.3}
//                 start={{
//                   transform: "translateX(-200px)",
//                 }}
//                 end={{
//                   transform: "translateX(0px)",
//                 }}
//               >
//                 <h3 className="skills__content-wrapper__inner-content__category-text">
//                   {item.label}
//                 </h3>
//                 <div className="skills__content-wrapper__inner-content__progressbar-container">
//                   {item.data.map((skillItem, j) => (
//                     <AnimateKeyframes
//                       play
//                       duration={1}
//                       keyframes={["opacity : 1", "opacity : 0"]}
//                       iterationCount="1"
//                     >
//                       <div className="progressbar-wrapper" key={j}>
//                         <p>{skillItem.skillName}</p>
//                         <Circle
//                           percent={skillItem.percentage}
//                           strokeWidth="10"
//                           strokeColor="linear-gradient(135deg, #FF0000, #FF6347)"
//                           trailWidth="10"
//                           trailColor="#eee"
//                         />
//                         <span className="percentage-text">
//                           {skillItem.percentage}%
//                         </span>
//                       </div>
//                     </AnimateKeyframes>
//                   ))}
//                 </div>
//               </Animate>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default Skills;




// import { Line } from "rc-progress"; // Import Line instead of Circle
// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate, AnimateKeyframes } from "react-simple-animate";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import './styles.scss';

// // Updated skillsData combining frontend and backend into a single "Web Development" category
// const skillsData = [
//   {
//     label: "Programming Languages:",
//     data: [
//       { skillName: "C", percentage: 100 },
//       { skillName: "C++", percentage: 100 },
//       { skillName: "Java", percentage: 50 },
//     ],
//   },
//   {
//     label: "Web Development",
//     data: [
//       { skillName: "HTML", percentage: 95 },
//       { skillName: "CSS", percentage: 90 },
//       { skillName: "JavaScript", percentage: 90 },
//       { skillName: "React", percentage: 85 },
//       { skillName: "Node.js", percentage: 80 },
//     ],
//   },
//   {
//     label: "Databases",
//     data: [
//       { skillName: "MySQL", percentage: 100 },
//       { skillName: "MongoDB", percentage: 75 },
//     ],
//   },
//   {
//     label: "Frameworks",
//     data: [
//       { skillName: "Bootstrap", percentage: 70 },
//       { skillName: "Node JS", percentage: 75 },
//       { skillName: "Express Js", percentage: 70 },
//     ],
//   },
//   {
//     label: "Developer Tools",
//     data: [
//       { skillName: "VS Code", percentage: 100 },
//       { skillName: "MYSQL", percentage: 100 },
//       { skillName: "Git", percentage: 74 },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="skills__content-wrapper">
//         <div className="skills__categories">
//           {skillsData.map((item, i) => (
//             <div key={i} className="skills__content-wrapper__inner-content">
//               <Animate
//                 play
//                 duration={1}
//                 delay={0.3}
//                 start={{
//                   transform: "translateX(-200px)",
//                 }}
//                 end={{
//                   transform: "translateX(0px)",
//                 }}
//               >
//                 <h3 className="skills__content-wrapper__inner-content__category-text">
//                   {item.label}
//                 </h3>
//                 <div className="skills__content-wrapper__inner-content__progressbar-container">
//                   {item.data.map((skillItem, j) => (
//                     <AnimateKeyframes
//                       play
//                       duration={1}
//                       keyframes={["opacity : 1", "opacity : 0"]}
//                       iterationCount="1"
//                     >
//                       <div className="progressbar-wrapper" key={j}>
//                         <p>{skillItem.skillName}</p>
//                         <Line
//                           percent={skillItem.percentage}
//                           strokeWidth="4"
//                           // Changed strokeColor to a solid color
//                           strokeColor="#FF6347" // Solid color for progress
//                           trailWidth="4"
//                           trailColor="#eee"
//                         />
//                         <span className="percentage-text">
//                           {skillItem.percentage}%
//                         </span>
//                       </div>
//                     </AnimateKeyframes>
//                   ))}
//                 </div>
//               </Animate>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa"; // Importing PDF icon
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

// Updated skillsData combining frontend and backend into a single "Web Development" category
const skillsData = [
  {
    label: "Programming Languages:",
    data: [
      { skillName: "C", percentage: 100 },
      { skillName: "C++", percentage: 100 },
      { skillName: "Java", percentage: 50 },
    ],
  },
  {
    label: "Web Development",
    data: [
      { skillName: "HTML", percentage: 95 },
      { skillName: "CSS", percentage: 90 },
      { skillName: "JavaScript", percentage: 90 },
      { skillName: "React", percentage: 85 },
      { skillName: "Node.js", percentage: 80 },
    ],
  },
  {
    label: "Databases",
    data: [
      { skillName: "MySQL", percentage: 100 },
      { skillName: "MongoDB", percentage: 75 },
    ],
  },
  {
    label: "Frameworks",
    data: [
      { skillName: "Bootstrap", percentage: 70 },
      { skillName: "Node JS", percentage: 75 },
      { skillName: "Express Js", percentage: 70 },
    ],
  },
  {
    label: "Developer Tools",
    data: [
      { skillName: "VS Code", percentage: 100 },
      { skillName: "MYSQL", percentage: 100 },
      { skillName: "Git", percentage: 74 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      {/* <h1></h1> */}
      <div className="skills__resume-link">
        <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          <FaFilePdf size={100} />
          <span> Download My Resume</span>
        </a>
        {/* <h1>hjdfhvef</h1> */}
      </div>
      <div className="skills__content-wrapper">
        <div className="skills__categories">
          {skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div className="skills__content-wrapper__inner-content__progressbar-container">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity : 1", "opacity : 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="4"
                          strokeColor="#FF6347" // Solid color for progress
                          trailWidth="4"
                          trailColor="#eee"
                        />
                        <span className="percentage-text">
                          {skillItem.percentage}%
                        </span>
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
