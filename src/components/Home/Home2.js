import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> SOBRE </span> MI
            </h1>
            <p className="home-about-body">
              Desde hace un tiempo me he sentido atraido por la programacion, hoy en dia
              es una pasion 💖
              <br />
              <br />Soy fluente en lenguajes como
              <i>
                <b className="purple"> Javascript, TypeScript y MySql. </b>
              </i>
              <br />
              <br />
              Mis intereses son desarrollar nuevas &nbsp;
              <i>
                <b className="purple">Productos y tecnologias web </b> and
                y tambien areas relacionadas a {" "}
                <b className="purple">
                  Diseño web, Inteligencia Artificial e E-commerce.
                </b>
              </i>
              <br />
              <br />
              De ser posible, quisiera poder aplicar mis conocimientos en 
              programacion con  <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Frameworks y Javascript Librarys
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Redux</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACTO</h1>
            <p>
              Puedes <span className="purple">conectarte </span>conmigo aqui:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Miketr32"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/miguelcoronel93/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Miguelcoronel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
