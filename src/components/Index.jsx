import React, { useState, useEffect } from "react";
import "./Styles/Style.css";
import MyResume from "./../components/Myresume.pdf";
import Event1 from "./Assests/Event1.jpg";
import Autobots from "./Assests/Autobots.jpg";
import Banking from "./Assests/Banking.jpg";
import Mypic from "./Assests/Mylastpic.png";
import AWS from "./Assests/AWS.jpeg";
import redhat from "./Assests/Red-Hat.png";
export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);
  return (
    <>
      <body className="main-content">
        <header
          className={`container header ${
            activeSection === "home" ? "active" : ""
          }`}
          id="home"
        >
          <div className="header-content">
            <div className="right-header">
              <h1 className="name">
                Hi, I'm <span>Manoj Naraharisetti.</span>
                <h2> Cyber Security Enthusiast.</h2>
              </h1>
              <p>
                I'm a Full stack Web Developer , am passionate about
                cybersecurity and always strive to learn more about it..
              </p>
              <div className="btn-con">
                <a
                  href={MyResume}
                  className="main-btn"
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src={Mypic} alt="" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <section
            className={`container about ${
              activeSection === "about" ? "active" : ""
            }`}
            id="about"
          >
            <div className="main-title">
              <h2>
                About <span>me</span>
                <span className="bg-text">my stats</span>
              </h2>
            </div>
            <div className="about-container">
              <div className="left-about">
                <h4>Information About me</h4>
                <p>
                  As a cybersecurity enthusiast with a passion for full-stack
                  web development. My goal is to create innovative and secure
                  web applications that make a positive impact in the world. I
                  am dedicated to staying up-to-date with the latest
                  technologies and trends, and I am always eager to learn and
                  grow in my field. I am committed to delivering high-quality
                  work that exceeds expectations. My passion for cybersecurity
                  and web development drives me to constantly strive for
                  excellence, and I am excited to see where my journey will take
                  me next.
                </p>
                <div className="btn-con">
                  <a
                    href={MyResume}
                    className="main-btn"
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon">
                      <i className="fas fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-about">
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">3</p>
                    <p className="small-text">
                      FUll Stack <br /> Projects
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">1</p>
                    <p className="small-text">
                      AWS <br /> Certification
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="abt-text">
                    <p className="large-text">1</p>
                    <p className="small-text">
                      REDHAT <br /> Certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <h4 className="stat-title">My Skills</h4>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="prog-title">html</p>
                  <div className="progress-con">
                    <p className="prog-text">90%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">css3</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="css"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">ReactJS</p>
                  <div className="progress-con">
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">NodeJS</p>
                  <div className="progress-con">
                    <p className="prog-text">87%</p>
                    <div className="progress">
                      <span className="node"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">Mongo DB</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <h4 className="stat-title">My Timeline</h4> */}
            {/* <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2010 - present</p>
                    <h5>Web Developer<span> - Vircrosoft</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2008 - 2011</p>
                    <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2016 - 2017</p>
                    <h5>C++ Programmer<span> - Slime Tech</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2009 - 2013</p>
                    <h5>Business Degree<span> - Sussex University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2013 - 2016</p>
                    <h5>Computer Science Degree<span> - Brookes University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2017 - present</p>
                    <h5>3d Animation<span> - Brighton University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
            </div> */}
          </section>
          <section
            className={`container ${
              activeSection === "portfolio" ? "active" : ""
            }`}
            id="portfolio"
          >
            <div className="main-title">
              <h2>
                My <span>Projects</span>
                <span className="bg-text">My Work</span>
              </h2>
            </div>
            <p className="port-text">
              Here is some of my work that I've done in various Full Stack
              Devlopmets.
            </p>
            <div className="portfolios">
              <div className="portfolio-item">
                <div className="image">
                  <img src={Event1} alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a
                      href="https://github.com/manojnaraharisetti/SDP-01.git"
                      className="icon"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="/" className="icon">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src={Autobots} alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a
                      href="https://github.com/rajgopalhota/SDP-02.git"
                      className="icon"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="http://bit.ly/kluautobots" className="icon">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="image">
                  <img src={Banking} alt="" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="/" className="icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="/" className="icon">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="portfolio-item">
                    <div className="image">
                        <img src={port4} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port5} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port2} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port7} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </div>
          </section>
          <section
            className={`container ${activeSection === "blogs" ? "active" : ""}`}
            id="blogs"
          >
            <div className="blogs-content">
              <div className="main-title">
                <h2>
                  My <span>Certifications</span>
                  <span className="bg-text">My Certifications</span>
                </h2>
              </div>
              <div className="blogs">
                <div className="blog">
                  <img src={AWS} alt="" />
                  <div className="blog-text">
                    <h4>AWS Cloud Practioner</h4>
                    <p>
                      AWS Certified Cloud Practitioner is an entry-level
                      certification demonstrating overall understanding of AWS
                      Cloud
                    </p>
                  </div>
                </div>
                <div className="blog">
                  <img src={redhat} alt="" />
                  <div className="blog-text">
                    <h4>RED HAT</h4>
                    <p>
                      Red Hat AD183 trains participants in comprehensive use of
                      Java EE for business-oriented software applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className={`container contact ${
              activeSection === "contact" ? "active" : ""
            }`}
            id="contact"
          >
            <div className="contact-container">
              <div className="main-title">
                <h2>
                  Contact <span>Me</span>
                  <span className="bg-text">Contact</span>
                </h2>
              </div>
              <div className="contact-content-con">
                <div className="left-contact">
                  <h4>Contact me here</h4>
                  <br></br>
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Location</span>
                      </div>
                      <p>: India, Andhra Pradesh</p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                      </div>
                      <p>
                        <span>: iammanoj1420@gmail.com</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Education</span>
                      </div>
                      <p>
                        <span>: KL University, Vijayawada</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>Mobile Number</span>
                      </div>
                      <p>
                        <span>: 7569363276</span>
                      </p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <i className="fas fa-globe-africa"></i>
                        <span>Languages</span>
                      </div>
                      <p>
                        <span>: English,Telugu</span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-icons">
                    <div className="contact-icon">
                      <a href="https://www.facebook.com/profile.php?id=100075523603222">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/NaraharisettiM1">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://github.com/manojnaraharisetti/">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.instagram.com/_mn.2k4_/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-contact">
                  <form className="contact-form">
                    <div className="input-control i-c-2">
                      <input type="text" required placeholder="YOUR NAME" />
                      <input type="email" required placeholder="YOUR EMAIL" />
                    </div>
                    <div className="input-control">
                      <input type="text" required placeholder="ENTER SUBJECT" />
                    </div>
                    <div className="input-control">
                      <textarea
                        name=""
                        id=""
                        cols="15"
                        rows="8"
                        placeholder="Message Here..."
                      ></textarea>
                    </div>
                    <div className="submit-btn">
                      <a
                        href={MyResume}
                        className="main-btn"
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="btn-text">Submit</span>
                        <span className="btn-icon">
                          <i className="fa fa-check"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="controls">
          <div
            className={`control ${
              activeSection === "home" ? "active-btn" : ""
            }`}
            data-id="home"
            onClick={() => setActiveSection("home")}
          >
            <i className="fas fa-home"></i>
          </div>
          <div
            className={`control ${
              activeSection === "about" ? "active-btn" : ""
            }`}
            data-id="about"
            onClick={() => setActiveSection("about")}
          >
            <i className="fas fa-user"></i>
          </div>
          <div
            className={`control ${
              activeSection === "portfolio" ? "active-btn" : ""
            }`}
            data-id="portfolio"
            onClick={() => setActiveSection("portfolio")}
          >
            <i className="fas fa-briefcase"></i>
          </div>
          <div
            className={`control ${
              activeSection === "blogs" ? "active-btn" : ""
            }`}
            data-id="blogs"
            onClick={() => setActiveSection("blogs")}
          >
            <i className="fa fa-certificate"></i>
          </div>
          <div
            className={`control ${
              activeSection === "contact" ? "active-btn" : ""
            }`}
            data-id="contact"
            onClick={() => setActiveSection("contact")}
          >
            <i className="fas fa-envelope-open"></i>
          </div>
        </div>
        <div className="theme-btn" onClick={() => setLightMode(!lightMode)}>
          <i className="fas fa-adjust"></i>
        </div>
      </body>
    </>
  );
}
