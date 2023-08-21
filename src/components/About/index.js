import React from "react";

import "./styles.css";

import ButtonLink from "./../ButtonLink";

const About = () => (
  <div className="about">
    <h1 className="title">Sobre mim</h1>
    <p className="text">
      Desenvolvedor web, técnico em Informática para Internet pelo IFMS e
      estudante de Sistemas de Informação na UFGD. Possuo experiência com
      programação back-end e web design. Atualmente, meu foco de atuação
      profissional é a área de desenvolvimento full-stack.
    </p>

    <div className="buttons">
      <ButtonLink text="ver projetos" to="/projects" />
    </div>
  </div>
);

export default About;
