import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sabari Vijayan </span>
            from <span className="purple"> Thrissur, Kerala, India.</span>
            <br />
            I am a Full Stack Web Developer currently working on Flutter, NodeJs, Laravel, Python and NextJs and am looking for oppurtunities to work in the same domain.
            <br />
            I have completed Integrated B.Tech in Electrical and Electronics Engineering at Federal Institute of Science and Technology, 
            Ernakulam and currently working as a Junior Developer at <span className="purple">Court Click, Panampilly Nagar, Kochi</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep pushing no matter how hard it gets, life always finds a way."{" "}
          </p>
          <footer className="blockquote-footer">Sabari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
