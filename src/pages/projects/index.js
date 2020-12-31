import React from "react";

import "./styles.css";

import Project from "../../components/Project";

const Projects = () => (
    <div className="projects">
        <div className="buttonBack"><img href="/" src="./img/icons/icon-back.svg" alt="Ícone voltar"></img><a className="text" href="/">Voltar</a></div>
        
        <Project title="InfoTrips"
        text="Site informativo sobre viagens internacionais no qual brasileiros podem consultar as regras de outros países para a entrada de estrangeiros em seus territórios."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS, Bootstrap, MySQL e jQuery."
        src="./img/projects/logo_infotrips.svg" alt="Logo InfoTrips" github="https://github.com/EduardoGimenesCustodio/InfoTrips"
        link="http://infotrips-com-br.umbler.net" color="primary" />

        <Project title="Portfólio"
        text="Site no qual compartilho informações sobre mim e projetos que desenvolvi."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS e ReactJS."
        text_logo="Eduardo Gimenes" github="https://github.com/EduardoGimenesCustodio/portfolio"
        link="http://eduardogimenes-com-br.umbler.net" color="dark" />

        <Project title="Feelings"
        text="Site no qual usuários compartilham experiências cotidianas e falam sobre seus sentimentos, interagindo em uma comunidade em que todos os integrantes tem por objetivo não deixar que as pessoas se sintam só."
        technologies="Tecnologias usadas: JavaScript, HTML, CSS, Node.JS, MongoDB e NoSQL."
        src="./img/projects/logo_feelings.svg" alt="Logo Feelings" github="https://github.com/EduardoGimenesCustodio/feelings"
        link="http://feelingsblog-com-br.umbler.net" color="primary" />
    </div>
);

export default Projects;