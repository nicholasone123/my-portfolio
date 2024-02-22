import "./Homepage.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


import frontEndIcon from "../Assets/frontend.png"
import dataScientistIcon from "../Assets/data-scientist.png"
import softwareIcon from "../Assets/software.png"


import profilePhoto from "../Assets/profile-photo.png"
import oneMindWeb from "../Assets/OneMindWeb.png"
import strokePrediction from "../Assets/StrokePredictionSystem.png"
import evPrediction from "../Assets/EVPrediction.png"
import footerVector from "../Assets/footer-vector.png"









function Homepage() {

    const iconStyle = {
        color: "#5F419E", 
      };

      const handleCVClick = () => {
        window.location.href = 'https://drive.google.com/drive/folders/1wpgLxI0fh9bn7LP4OreF8xgGlQiEtuiY?usp=sharing';
      };

      const handleOneMindClick = () => {
        window.location.href = 'https://github.com/yeeshuen02/one-mind.git';
      };

      const handleStrokeClick = () => {
        window.location.href = 'https://github.com/nicholasone123/StrokePrediction.git';
      };

      const handleEVClick = () => {
        window.location.href = 'https://github.com/nicholasone123/ElectricVehiclesPrice.git';
      };

      const HorizontalLine = () => {
        return (
          <div className="horizontal-line"></div>
        );
      }

      const scrollToSection = (className) => {
        const targetSection = document.querySelector(`.${className}`);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sendEmail = () => {
        window.location.href = 'mailto:nicholasyong03@gmail.com';
      };

  return (


    <div className="Homepage">
        <div className="intro-part">

            <div className="top-nav-bar">
                <div>
                    <button className="home-button">
                        NICHOLAS YONG
                    </button>
                </div>
                <div className="right-button">
                    <button onClick={() => scrollToSection('Homepage')}>Home</button>
                    <button onClick={() => scrollToSection('about-me-section')}>About</button>
                    <button onClick={() => scrollToSection('skills')}>Skills</button>
                    <button onClick={() => scrollToSection('past-project')}>Projects</button>
                </div>
            </div>
        <div className="profile-section">
            <div className="image-section">
                <img src={profilePhoto} alt="search Logo" />
            </div>
            <div className="profile-intro">
                <p>I'm <span className="highlighted-text">Nicholas</span>, an internship applicant</p>
                <div className="for-linkedIn">
                        <button className="download-cv-button" onClick={handleCVClick}>Download CV</button>
                        <button className="linkedIn-button"> <a href="https://www.linkedin.com/in/nicholas-yong-weng-hong-3348b4229/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={50} />
                                </a>
                        </button>
                        <button className="linkedIn-button"> <a href="https://github.com/nicholasone123" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50} style={iconStyle} />
        </a>
                        </button>
                        
                        
                </div>
                
            </div>

        </div>
      </div>

      <div className="about-me-section">
        <div className="about-me-texts">
            <p className="finalYearText">Final Year Internship Applicant</p>
            <p className="aboutMe">About me</p>
            <p className="about-me-description">Nicholas is a final year student majoring in Computer Science 
                with a minor in Fintech. He earned recognition for his academic achievements, being on the Dean's List for four 
                consecutive semesters. He takes initiative to be involved in activities to improve himself and is actively
                 seeking for learning opportunities.</p>
        </div>

        <div className="about-me-jobs">
            <div className="front-end-dev">
                <div className="front-end-desscription">
                    <p>Front End Developer</p>
                </div>
                <img src={frontEndIcon} alt="search Logo" />
            </div>
            <div className="front-end-dev">
                <div className="front-end-desscription">
                    <p>Software Engineer</p>
                </div>
                <img src={softwareIcon} alt="search Logo" />
            </div>
            <div className="front-end-dev">
                <div className="front-end-desscription">
                    <p>Data Scientist</p>
                </div>
                <img src={dataScientistIcon} alt="search Logo" />
            </div>
        </div>
      </div>
        <div className="skills">
            <p className="skills-text">Skills</p>
            <p className="skills-header-text">Languages</p>
            <div className="languages-first-row">
                <div className="languages-content">
                    <p>Javascript</p>
                </div>
                <div className="languages-content">
                    <p>Python</p>
                </div>
                <div className="languages-content">
                    <p>Java</p>
                </div>
                <div className="languages-content">
                    <p>HTML</p>
                </div>
            </div>
            <div className="languages-sec-row">
                <div className="languages-content">
                    <p>PHP</p>
                </div>
                <div className="languages-content">
                    <p>R</p>
                </div>
                
            </div>
            <p className="skills-header-text">Framework & Tools</p>
            <div className="languages-first-row">
                <div className="languages-content">
                    <p>React.js</p>
                </div>
                <div className="languages-content">
                    <p>Figma</p>
                </div>
                <div className="languages-content">
                    <p>Microsoft</p>
                </div>
                <div className="languages-content">
                    <p>Canva</p>
                </div>
            </div>
            
        </div>
        <div className="past-project"> 
            <p className="pass-project-text">Past Projects</p>

            <div className="OneMindWeb">
                <div className="OneMindImage">
                    <img src={oneMindWeb} alt="search Logo" />
                </div>
                <div className="OneMind-des">
                    <h2>Depression Detection System</h2>
                    <p>
OneMind, a web application for detecting depression, incorporates a deep learning model with the goal of identifying early-stage depression for timely intervention and treatment.</p>
                    <button className="view-code-button" onClick={handleOneMindClick}>View Code &nbsp;  &rarr;</button>
                </div>
            </div>

            <div className="StrokeWeb">
                
                <div className="OneMind-des">
                    <h2>Stroke Prediction System</h2>
                    <p>

                    The Stroke Prediction System, developed in Python, is designed to analyze, train on, and test a dataset with the aim of identifying and predicting strokes.</p>
                    <button className="view-code-button" onClick={handleStrokeClick}>View Code &nbsp;  &rarr;</button>
                </div>
                <div className="OneMindImage">
                    <img src={strokePrediction} alt="search Logo" />
                </div>
            </div>

            <div className="EVWeb">
                <div className="OneMindImage">
                    <img src={evPrediction} alt="search Logo" />
                </div>
                <div className="OneMind-des">
                    <h2>Electric Vehicles Price Prediction</h2>
                    <p>

                    The Electric Vehicles Price Prediction system, implemented in R, is designed to analyze, train, and evaluate a dataset for the purpose of forecasting the cost of electric vehicles.</p>
                    <button className="view-code-button" onClick={handleEVClick}>View Code &nbsp;  &rarr;</button>
                </div>
            </div>

        </div>
        <div className="footer">
            <p className="footer-header">Let's connect</p>
            <p className="footer-description">I am looking forward to connecting with you guys to secure an internship slot soon. I would like to be part of the company’s growth and play my part in bringing the company to new heights</p>
            <button className="letsConnect" onClick={sendEmail}>Contact Me</button>
            <HorizontalLine />
            <div className="copyright-legal">
                                <p className="footer-copyright-text"> Copyright © 2024 Nicholas Yong Weng Hong </p>
                                <img className="footer-vector" src={footerVector} alt="Footer Vector"/>
                                <p className="footer-copyright-text"> Privacy Policy </p>
                                <img className="footer-vector" src={footerVector} alt="Footer Vector"/>
                                <p className="footer-copyright-text"> Terms & Conditions </p>
            </div>

        </div>
    </div>
  );
}

export default Homepage;
