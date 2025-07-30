import "./hero.css";
import profileImg from "../../assets/profile-img.png";
import { Link } from "react-router-dom";
import resume from "../../assets/Branesh_P_DE_resume.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Branesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <img
        style={{ height: 320, width: 320 }}
        src={profileImg}
        alt="my photo"
      />
      <h1>I'm Branesh</h1>
      <h2>Software Engineer</h2>
      <p>
        I’m a self-taught Software Engineer passionate about building scalable
        systems and intuitive web apps. With experience across data pipelines
        and full-stack development, I turn ideas into real, working solutions.
      </p>

      <div className="hero-action">
        <Link className="hero-connect link-button" to="/contact">
          Connect with me
        </Link>
        <div onClick={handleDownload} className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
