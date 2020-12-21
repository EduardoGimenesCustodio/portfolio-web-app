import React from "react";

import "./styles.css";

import Button from "./../Button";

const About = () => (
    <div className="about">
        <h1 className="title">Sobre mim</h1>
        <p className="text">Desenvolvedor web, técnico em Informática para Internet pelo IFMS e estudante de Sistemas de Informação na UFGD.</p>
        
        <div className="buttons">
            <Button text="meus projetos" href="/projects" />
        </div>
    </div>
);

export default About;