import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.JPG";
import Toolstack from "./Toolstack";
import Education from "./Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      {/* Add the About card and the Text stack next to each other in the same row and put the image smaller in a circle */}
      <Container fluid className="about-header">
        <Row style={{ justifyContent: "flex-start", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h4 style={{ fontSize: "2em", paddingBottom: "10px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h4>
            {/* Add image as a circular profile picture */}
            <img src={laptopImg} alt="about" className="img-fluid" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
            <Aboutcard />
          </Col>
          <Col
            md={7}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h4 style={{ fontSize: "2em", paddingBottom: "10px" }}>
              Professional <strong className="purple">Skillset </strong>
            </h4>
            <Techstack />
          </Col>
        </Row>
        </Container>
        {/* Add the Education and Tools I use sections in the same row */}
        <Container fluid className="about-header">
        <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h4 style={{ fontSize: "2em", paddingBottom: "10px" }}>
              <strong className="purple">Education </strong>
            </h4>
            <Education />
          </Col>
          <Col
            md={7}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h4 style={{ fontSize: "2em", paddingBottom: "10px" }}>
              <strong className="purple">Tools</strong> I use
            </h4>
            <Toolstack />
          </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default About;
