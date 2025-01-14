import React from "react";
import { Container, Row, Col, Carousel} from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";

function WorkExperience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Work Experience</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are the roles I've had, along with my contributions and responsibilities.
                </p>
                <Carousel style={{ paddingBottom: "10px" }} interval={5000} controls={false} indicators={true}>
                    <Carousel.Item>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* SAP Labs Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Software Developer Intern"
                            company="SAP Labs Vancouver"
                            duration="07/2024 - Current"
                            description={"As a full-stack developer at SAP Labs, I built automation tools to support both customers and internal applications. I developed a vendor monitoring tool and automated data fetching from the National Vulnerability Database. I created APIs with pagination for efficient data management and designed a reusable email service for global vulnerability reporting. Additionally, I created clear onboarding documentation using SharePoint and Swagger UI."}
                        />
                    </Col>

                    {/* McKinsey & Company Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Software Developer"
                            company="Mckinsey & Company, Bengaluru"
                            duration="02/2021 - 08/2022"
                            description={"As a Full Stack Developer at McKinsey & Company, I built and integrated key features for healthcare, e-commerce, and banking clients, including authentication, payment gateways, and loyalty programs. I developed end-to-end banking digital assets and microservices, and created automation tools to streamline backend processes."}
                        />
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Research Assistant"
                            company="University Of British Columbia"
                            duration="09/2022- 07/2024"
                            description={"Researched on a road design optimization problem for mining regions, with a particular emphasis on developing a highly precise fuel cost estimation model"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Teaching Assistant"
                            company="University Of British Columbia"
                            duration="09/2022 - 07/2024"
                            description={"Designed and organized labs for courses including Computer Graphics, Data Structures, Machine Architecture and Parallel Computing"}
                        />
                    </Col>
                </Row>
                </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
    );
}

export default WorkExperience;
