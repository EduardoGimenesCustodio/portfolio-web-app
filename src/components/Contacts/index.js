import React from "react";

import "./styles.css";

import Contact from "./../Contact";

const Contacts = () => (
    <div className="contacts">
        <h1 className="title">Entre em contato</h1>
        <div>
            <Contact href="https://www.linkedin.com/in/eduardo-henrique-gimenes-custodio-335062128" src="./img/icons/linkedin.svg" alt="Ícone do LinkedIn" />
            <Contact href="mailto:eduardo.gimenes.custodio@gmail.com" src="./img/icons/gmail.svg" alt="Ícone do Gmail" />
            <Contact href="mailto:eduardo.gimenes.custodio@hotmail.com" src="./img/icons/outlook.svg" alt="Ícone do Outlook" />
            <Contact href="https://github.com/EduardoGimenesCustodio" src="./img/icons/github.svg" alt="Ícone do GitHub" />
        </div>
    </div>
);

export default Contacts;