import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiDocker, DiGithub, DiIntellij} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiSonarqube,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
        <h6>IntelliJ</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
        <h6>SonarQube</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h6>Dockert</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
    </Row>
  );
}

export default Toolstack;
