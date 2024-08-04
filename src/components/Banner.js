import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArrowRightCircle from "bootstrap-icons/icons/arrow-right-circle.svg";
import HeaderImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.4);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio!</span>
                  <h1>
                    {`Hi I'm James McGilloway `}
                    <div className="wrap-container">
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>
                    I am a web developer looking for a new opportunity. I am
                    proficient in a number front-end technologies including
                    React and Javascript. I am excited to continue to learn and
                    advance my skills in new fields. I love the feeling of
                    solving a problem, fixing an issue and seeing my progress
                    grow.
                  </p>
                  <button onClick={() => (window.location.href = "#contact")}>
                    Let's Connect
                    <img src={ArrowRightCircle} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" className="header-img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
