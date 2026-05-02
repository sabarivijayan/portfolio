import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started out in Electrical and Electronics Engineering but
              transitioned into software development after discovering a strong
              interest in building real-world applications.
              <br />
              <br />
              Currently, I work across both mobile and backend development,
              primarily using
              <b className="purple"> Flutter</b> for building responsive mobile
              applications and
              <i>
                <b className="purple"> Node.js and Laravel</b>
              </i>{" "}
              for backend systems and APIs.
              <br />
              <br />
              I enjoy working on end-to-end features — from designing clean user
              interfaces to handling business logic, APIs, and database
              interactions.
              <br />
              <br />
              My core strengths lie in
              <i>
                <b className="purple">
                  {" "}
                  problem solving, debugging, and understanding system
                  architecture
                </b>
              </i>
              , which I’ve developed through hands-on work with production
              systems.
              <br />
              <br />
              Lately, I’ve been focusing on improving my fundamentals through
              <i>
                <b className="purple"> Data Structures and Algorithms (DSA)</b>
              </i>{" "}
              while continuing to deepen my expertise in
              <i>
                <b className="purple"> Flutter and modern backend development</b>
              </i>
              .
              <br />
              <br />
              I also explore technologies like
              <i>
                <b className="purple"> Next.js</b>
              </i>{" "}
              to stay aligned with modern web development practices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sabarivijayan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/omakka_thoran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sabarivijayan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kry.p.tic/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
