import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Miguel Coronel </span>
            y vivo en <span className="purple">Buenos Aires, Argentina.</span>
            <br />Soy desarrollador Full-Stack y estoy en busqueda de mi primer empleo
            en el mundo IT.
            <br />
            <br />
            Ademas de escribir codigo, realizo otras actividades que tambien amo!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar y desarrollar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseñar graficos
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender sobre arte
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
