import React, { useState } from "react";
import "./MyResume.css";

const MyResume = () => {
  const [activeSection, setActiveSection] = useState("education");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const getSectionContent = () => {
    switch (activeSection) {
      case "education":
        return (
          <div id="education">
            <div className="education-details">
              <div className="education-list">
                <h5>Sri Guru Harkrishan Public School, Nagpur. [SSC]</h5>
                <ul>
                  <li>CBSE</li>
                  <li>Scored 88.04%</li>
                  <li>Point 3</li>
                </ul>
                <h5>Baba Nanak Sindhi Hindi Junior College, Nagpur. [HSC]</h5>
                <ul>
                  <li>State Board</li>
                  <li>Scored 63.2%</li>
                  <li>Point 3</li>
                </ul>
                <h5>
                  Anjuman College of Engineering and Technology, Nagpur. [BE]
                </h5>
                <ul>
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
              <div className="small-field"></div>
            </div>
            {/* Add more qualification details if needed */}
          </div>
        );
      case "workHistory":
        return (
          <div id="workHistory">
            <h6>Shatam Technologies</h6>
            <h6>SOFTWARE ENGINEER</h6>
            <p>Currenty working as web and application developer.</p>
            <ul>
              <li>
                Worked on Data Mining which is is scrapping and mining data from
                the web and transforming it into a structured database.
              </li>
              <li>
                Worked on application developemnt which is focused on
                streamlining order management, delivery logistics, and
                verification processes.
              </li>
            </ul>
            <h6>Qaswa Technologies</h6>
            <h6>Backend Trainee - Inter</h6>
            <ul>
              <li>
                Acquired Skills in HTML, CSS, Bootstrap, MySql, Java, MVC. 
              </li>
              <li>
                Contributed to the development of student and staff modules for a College management project.
              </li>
            </ul>
          </div>
        );
      case "programmingSkills":
        return (
          <div id="programmingSkills">
            <h4>Programming Skills</h4>
            <div className="programmingSkills-container">
              <div className="skill">
                <p className="skills-heading">React</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
                <p className="skills-heading">React Native</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <p className="skills-heading">JavaScript</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
                <p className="skills-heading">Core Java</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <p className="skills-heading">Bootstrap</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
                <p className="skills-heading">HTML</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <p className="skills-heading">CSS</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "80%", height: "20px" }}
                  ></div>
                </div>
                <p className="skills-heading">MySql</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    style={{ width: "70%", height: "20px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      case "projects":
        return (
          <div id="projects">
            <div className="project-list">
              <h5 className="headingh5" >Personal Portfolio Website</h5>
              <ul>
                <li className="projectlist" >Technologies used: React JS, Bootstra</li>
                <li className="projectlist" >
                  A personal Portfolio website to showcase all my details and
                  project at one plave.
                </li>
              </ul>
              <h5 className="headingh5" >Mobile Application</h5>
              <ul>
                <li className="projectlist" >
                  Technologies used: React Native, JavaScript, Expo, CSS,
                  Node.js, API developemnt
                </li>
                <li className="projectlist" >
                  I've worked on building apps that efficiently handle order
                  processing, ensuring seamless delivery workflows, and
                  implementing robust verification mechanisms.
                </li>
              </ul>
              <h5 className="headingh5" >Builder's</h5>
              <ul>
                <li className="projectlist" >Technologies used: Core java</li>
                <li className="projectlist" >
                  A USA based project where information about real-estate are
                  collected using their websites where the status and
                  information of the property changes every month. Its a monthly
                  project and this is basically done for the brokers present
                  there who use the details of these builders for selling
                  properties using CSVs.
                </li>
              </ul>
              <h5 className="headingh5">SAC(Shatam Address Corrector)</h5>
              <ul>
                <li className="projectlist" >
                  Shatam Address Corrector is an API, designed to collect
                  accurate addresses for any given area, ensuring the correct
                  format and eliminating errors such as spelling mistakes or ZIP
                  code discrepancies. Initially, input and output were provided
                  in JSON format, catering to both single and bulk addresses.
                  Consequently, the server now invokes a distinct handler to
                  convert JSON format input to a string Additionally, once the
                  addresses are corrected, the output now includes latitude and
                  longitude information for all possible address variations.
                </li>
              </ul>
            </div>
          </div>
        );
      case "interests":
        return (
          <div id="interests">
            <h2>Interests</h2>
            <p>Add your interests details.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="heading">Resume</h1>
      <h2 className="headingh2">My Formal Bio Details</h2>
      <div className="resume-highlighted-section">
        <div className="resume-container">
          <div className="side-navigation">
            <button onClick={() => handleNavClick("education")}>
              🎓 Education
            </button>
            <button onClick={() => handleNavClick("workHistory")}>
              🏢 Work History
            </button>
            <button onClick={() => handleNavClick("programmingSkills")}>
              💻 Programming Skills
            </button>
            <button onClick={() => handleNavClick("projects")}>
              🚀 Projects
            </button>
            <button onClick={() => handleNavClick("interests")}>
              🌟 Interests
            </button>
          </div>

          <div className="resume-content">{getSectionContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
