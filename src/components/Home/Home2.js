import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMediumSquare,
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
            {/* Experienced software developer with a focus in backend development, building server-side applications. Currently working at
SAP Labs transforming requirements into efficient solutions. Previously worked in Mckinsey & Company */}
            <p className="home-about-body">
              I am an experienced software developer who is specialized in designing efficient and scalable systems to tackle real-world challenges effectively.
              I love to solve complex problems and am highly inclined towards mathematical thinking.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript, TypeScript and Python. </b>
              </i>
              <br />

              <br />
              My field of interest's are building new &nbsp;
              <i>
                <b className="purple">Web applications and products </b> that could create a huge impact and make the life simpler.

              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java SpringBoot, Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{
                width: "250px", // Set the desired width
                height: "300px", // Set the desired height
                objectFit: "cover", // Ensures the image fits nicely
              }} />
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
                  href="https://github.com/Meghan1202"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meghana-khuntia-36929918a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://meghanakhuntia12.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumSquare />
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
