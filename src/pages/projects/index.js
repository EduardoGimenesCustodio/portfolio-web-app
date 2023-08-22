import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import Project from "../../components/Project";

const Projects = () => {
  return (
    <div className="projects">
      <div className="buttonBack">
        <Link className="buttonBackImg" to="/">
          <img src="./img/icons/icon-back.svg" alt="Ícone voltar"></img>
        </Link>
        <Link className="text" to="/">
          Voltar
        </Link>
      </div>

      <Project
        title="InfoTrips"
        text="Projeto desenvolvido como TCC do curso técnico em Informática para Internet no IFMS. Consiste em um site informativo sobre viagens internacionais no qual brasileiros podem consultar as regras de outros países para a entrada de estrangeiros em seus territórios."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS, Bootstrap, MySQL e jQuery."
        src="./img/projects/logo_infotrips.svg"
        alt="Logo InfoTrips"
        github="https://github.com/EduardoGimenesCustodio/InfoTrips"
        // link="http://infotrips-com-br.umbler.net"
        color="primary"
      />

      <Project
        title="DS Deliver"
        text="Projeto desenvolvido durante a 2ª edição do evento Semana DevSuperior. Consiste em um site no qual usuários podem solicitar a entrega de alimentos."
        technologies="Tecnologias usadas: Java, TypeScript, HTML, CSS, Node.JS, ReactJS, PostgreSQL e Spring Boot."
        src="./img/projects/logo_dsdeliver.svg"
        alt="Logo DS Deliver"
        github="https://github.com/EduardoGimenesCustodio/dsdeliver-sds2"
        link="https://dsdelivery-eg.netlify.app/"
        color="dark"
      />

      <Project
        title="Feelings"
        text="Projeto desenvolvido durante o curso técnico em Informática para Internet no IFMS. Consiste em um site no qual usuários compartilham experiências cotidianas e falam sobre seus sentimentos, interagindo em uma comunidade em que todos os integrantes tem por objetivo não deixar que as pessoas se sintam só."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS, MongoDB e NoSQL."
        src="./img/projects/logo_feelings.svg"
        alt="Logo Feelings"
        github="https://github.com/EduardoGimenesCustodio/feelings"
        // link="http://feelingsblog-com-br.umbler.net"
        color="primary"
      />

      <Project
        title="Portfólio"
        text="Site no qual compartilho informações sobre mim e projetos que desenvolvi."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS e ReactJS."
        text_logo="Eduardo Gimenes"
        github="https://github.com/EduardoGimenesCustodio/portfolio"
        // link="https://eduardogimenes.netlify.app/"
        color="dark"
      />
    </div>
  );
};

export default Projects;
