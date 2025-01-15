import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="University of Hana & Analytics"
              date="12/2024"
              description="Developed a platform to manage learning materials for 
              new developers at SAP, enabling course registration and progress tracking."
              skills={["React.js", "Express.JS", "MongoDB", "Oauth2", "SharePoint Integration"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Crypto Emporium"
              date="01/2023"
              description="A NFT app that delivers a robust and reliable platform for artists and collectors to engage with the exciting world of NFTs,
empowering creators and enabling collectors to own unique digital assets securely using Alchemy and Pinata services."
              skills={["React.js", "Alchemy", "NFT", "Pinata"]}
              ghLink={"https://github.com/Joycelyn-Chen/Pinata_IPFS/"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="FireBackOPs"
              date="06/2022"
              description="An application designed to help developers in bringing backend servers to life with the minimum amount of hassle and
minimal code. It provides an easy-to-use UI wherein a developer can collaborate and create custom backend servers with
just a few clicks and the fabricated server is directly pushed to Github for sharing, testing and deployment."
              skills={["React.js", "Express.JS", "Postgres", "Redux", "Redis", "Microservices","Docusaurus", "Docker"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Auth Service"
              date="03/2021"
              description=" Build an auth microservice that would do authentication and authorization of new/ current users."
              skills={["Express.Js", "Middleware", "Validations", "Docker"]}
              ghLink={"https://github.com/Meghan1202/auth-service"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Project Mendacious"
              date="12/2020"
              description=" A virtualization platform designed to support both the Intel and Arm based systems for an easy installation and usage of linux based virtual machines."
              skills={["MacOS", "SwiftUI", "Virtualization Framework"]}
              ghLink={"https://github.com/Meghan1202/Project-Mendacius"}
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
