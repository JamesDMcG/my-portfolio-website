import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-white-transparent.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/james-mcgilloway"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon1" />
              </a>
              <a
                href="https://www.facebook.com/james.mcgilloway.1/"
                target="_blank"
              >
                <img src={navIcon2} alt="navIcon2" />
              </a>
              <a
                href="https://www.instagram.com/tiddilybits/?hl=en"
                target="_blank"
              >
                <img src={navIcon3} alt="navIcon3" />
              </a>
              <a href="https://github.com/JamesDMcG" target="_blank">
                <img src={navIcon4} alt="navIcon4" />
              </a>
            </div>
            <p>Copyright 2024. All rights reserved by James McGilloway</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
