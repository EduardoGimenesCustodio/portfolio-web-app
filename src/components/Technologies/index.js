import React from "react";

import "./styles.css";

import Technology from "./../Technology";

const Technologies = () => (
    <div className="technologies">
        <section>
            <h1 className="title">Tecnologias</h1>
            <div>
                <Technology src="./img/icons/javascript.svg" alt="Logo Javascript" />
                <Technology src="./img/icons/nodejs.svg" alt="Logo Node.JS" />
                <Technology src="./img/icons/html.svg" alt="Logo HTML" />
                <Technology src="./img/icons/css.svg" alt="Logo CSS" />
            </div>
            <div>
                <Technology src="./img/icons/mysql.svg" alt="Logo MySQL" />
                <Technology src="./img/icons/mongodb.svg" alt="Logo MongoDB" />
                <Technology src="./img/icons/bootstrap.svg" alt="Logo Bootstrap" />
                <Technology src="./img/icons/nosql.png" alt="Logo NoSQL" />
            </div>
        </section>

        <section>
            <h1 className="title">Estudando</h1>
            <div>
                <Technology src="./img/icons/react.svg" alt="Logo ReactJS" />
                <Technology src="./img/icons/c.svg" alt="Logo C" />
                <Technology src="./img/icons/c++.svg" alt="Logo C++" />
            </div>            
        </section>
        
        <section>
            <h1 className="title">Tenho interesse</h1>
            <div>
                <Technology src="./img/icons/reactnative.svg" alt="Logo React Native" />
                <Technology src="./img/icons/python.svg" alt="Logo Python" />
                <Technology src="./img/icons/php.svg" alt="Logo PHP" />
            </div>            
        </section>
    </div>
);

export default Technologies;