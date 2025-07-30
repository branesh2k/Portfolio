import theme_pattern from "../../assets/theme_pattern.svg";
import projects_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {projects_data.map((project, index) => {
          return (
            <div key={index} className="services-format">
              <a
                href={project.s_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{project.s_no}</h3>
                <h2>{project.s_name}</h2>
                <p>{project.s_desc}</p>
                <div className="services-readmore">
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
