import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meghana Khuntia </span>
            from <span className="purple"> Vancouver, Canada.</span>
            <br />
            I am currently working as a software developer intern at SAP Vancouver transforming requirements into efficient solutions. Previously worked at Mckinsey & Company.
            <br />
            I have completed Master of Science (MSc) in Computer Science from University of British Columbia. As a part of my research journey, I have formulated, modeled and solved a road design optimization problem . 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Organizing 3D printing events at SAP 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering with the community policing center (CPC).
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
