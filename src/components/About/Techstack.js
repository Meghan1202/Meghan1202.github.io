import React from "react";
import { Col, Row,  } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiGraphql,
  SiFlask,
} from "react-icons/si";
import { TbBrandGolang, TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    //Add the tech stack text instead of the icons
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot scale={0.4}/>
        <h6>Spring Boot</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h6>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6>Next.JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <h6>GraphQl</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <h6>ReactNative</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h6>Redis</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <h6>Flask</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
