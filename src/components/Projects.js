import { Container, Row, Col, TabContainer, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Forkify-App-ScrShot.png";
import projImg2 from "../assets/img/Mapty-App-ScrShot.png";
import projImg3 from "../assets/img/Bankist-App-ScrShot.png";
import projImg4 from "../assets/img/Portfolio-Website-ScrShot.png";
import projImg5 from "../assets/img/Bankist-Website-ScrShot.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const websiteProjects = [
    {
      title: "My Portfolio Website",
      description: "A website to showcase my work",
      imgUrl: projImg4,
    },
    {
      title: "Bankist Website",
      description: "A website for the Bankist App",
      imgUrl: projImg5,
    },
  ];

  const appProjects = [
    {
      title: "Forkify",
      description: "A recipe book",
      imgUrl: projImg1,
    },
    {
      title: "Mapty",
      description: "An exercise diary",
      imgUrl: projImg2,
    },
    {
      title: "Bankist",
      description: "A simple banking app",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInLeft" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of my projects I have completed throughout my
                    studies and personal time. I hope you like them. If you
                    would like more information on them, please visit the
                    repositories on my Github by clicking on the project!
                  </p>
                </div>
              )}
            </TrackVisibility>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Websites</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {appProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {websiteProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
