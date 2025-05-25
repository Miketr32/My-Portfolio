import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> Sobre </span> mi:
            </h1>
            <p className="home-about-body">
              Mi nombre es Miguel, actualmente soy Salesforce Developer aunque cuando me inicie en el mundo de la programacion
              comence aprendiendo el paquete completo Full-Stack, y hoy en dia estoy en busqueda de nuevos desafios.
              <br />
              Mis hobbies son jugar videojuegos (Fortnite, Minecraft y Anno 1404 son mis favoritos 😄), patinar en mi longboard
              y en ocasiones disenar y/o mejorar mis conocimientos en programacion.
              <br />Tengo conocimiento en lenguajes como
              <b className="purple"> JavaScript, Apex, LWC, Java, entre otros... </b>
              <br />
              <br />
              Mis intereses actuales son poder embeberme aun mas con el conocimiento en desarrollo de apps (Desktop y Mobile) y
              en el desarrollo de implementaciones para modelos de IA o desarrollo de agentes inteligentes en Salesforce (AgentForce).
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
            <h1>
              Contacto
            </h1>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
