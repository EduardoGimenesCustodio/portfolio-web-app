import React from "react";

import "./styles.css";

import Technology from "./../Technology";

const Technologies = () => (
    <div className="technologies">
        <section className="technologies-section">
            <h1 className="title">Tecnologias</h1>
            <div>
                <Technology src="./img/icons/javascript.svg" alt="Logo Javascript" name="Javascript" />
                <Technology src="./img/icons/nodejs.svg" alt="Logo Node.JS" name="Node.JS" />
                <Technology src="./img/icons/html.svg" alt="Logo HTML" name="HTML" />
                <Technology src="./img/icons/css.svg" alt="Logo CSS" name="CSS" />
            </div>
            <div>
                <Technology src="./img/icons/mysql.svg" alt="Logo MySQL" name="MySQL" />
                <Technology src="./img/icons/mongodb.svg" alt="Logo MongoDB" name="MongoDB" />
                <Technology src="./img/icons/bootstrap.svg" alt="Logo Bootstrap" name="Bootstrap" />
                <Technology src="./img/icons/nosql.png" alt="Logo NoSQL" name="NoSQL" />
            </div>
        </section>

        <section className="technologies-section">
            <h1 className="title">Estudando</h1>
            <div>
                <Technology src="./img/icons/react.svg" alt="Logo ReactJS" name="ReactJS" />
                <Technology src="./img/icons/c.svg" alt="Logo C" name="C" />
                <Technology src="./img/icons/c++.svg" alt="Logo C++" name="C++" />
            </div>            
        </section>
        
        <section className="technologies-section">
            <h1 className="title">Tenho interesse</h1>
            <div>
                <Technology src="./img/icons/reactnative.svg" alt="Logo React Native" name="React Native" />
                <Technology src="./img/icons/python.svg" alt="Logo Python" name="Python" />
                <Technology src="./img/icons/php.svg" alt="Logo PHP" name="PHP" />
            </div>            
        </section>
    </div>
);

export default Technologies;