import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about-img.png";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_img} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              My journey into tech began with a strong focus on data. I started
              by learning Python, PostgreSQL, Apache Spark, and core data
              engineering concepts like data warehousing and pipelines. As I
              explored deeper, I picked up tools like Apache Airflow, AWS for
              cloud, and Docker building a solid foundation in distributed
              systems.
            </p>
            <p>
              Wanting to make my work more accessible and complete, I stepped
              into the world of full-stack development. I taught myself FastAPI,
              NestJS for structured backend development, and ReactJS. Most of
              what I’ve learned has come from YouTube, docs, and hands-on
              project building.
            </p>
            <p>
              This portfolio reflects my end-to-end capabilities from designing
              scalable data pipelines to delivering frontend experiences and my
              drive to keep learning, building, and shipping real-world
              solutions.
            </p>
          </div>
          <div className="about-skills-columns">
            <div className="about-skills-col">
              <div className="about-skill">
                <p>Python</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "80%" }} />{" "}
                </div>
              </div>
              <div className="about-skill">
                <p>PostgreSQL</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "90%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>Spark</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "70%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>Airflow</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "45%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>AWS</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "65%" }} />
                </div>
              </div>
            </div>
            <div className="about-skills-divider"></div>
            <div className="about-skills-col">
              <div className="about-skill">
                <p>FastAPI</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "70%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>TypeScript</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "55%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>Nestjs</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "65%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>React Js</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
              <div className="about-skill">
                <p>Docker</p>{" "}
                <div className="bar-wrapper">
                  <hr style={{ width: "68%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-acheivement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>6+</h1>
          <p>PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
