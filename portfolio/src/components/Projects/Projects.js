import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Spotify from "../../Assets/Projects/Spotify.png";
import potato from "../../Assets/Projects/potato.png";
import Netflix from "../../Assets/Projects/Netflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potato}
              isBlog={false}
              title="Potato"
              description="Potato is a food delivery app clone developed using the MERN stack (MongoDB, Express.js, ReactJS, and Node.js). This application replicates the functionality of popular food delivery services, providing users with a seamless experience to browse, order, and track their meals."
              ghLink="https://github.com/sabarivijayan/Potato-Live"
              demoLink="https://potato-live-live.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix Clone is a web application built using ReactJS, designed to mimic the popular streaming service, Netflix. Leveraging the power of a Movie API, this clone provides users with a seamless and dynamic interface to browse, search, and watch movie trailers."
              ghLink="https://github.com/sabarivijayan/netflix-react"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify Clone"
              description="Spotify Clone is a web application developed using React and the Spotify API, designed to replicate the core features of the popular music streaming service, Spotify. This clone allows users to browse, search, and listen to their favorite tracks. A sleek, intuitive design modeled after Spotify, providing easy navigation and a visually appealing experience."
              ghLink="https://github.com/sabarivijayan/spotify-clone"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
