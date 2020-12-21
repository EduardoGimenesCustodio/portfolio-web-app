import React from "react";

import "./styles.css";

import Technology from "./../Technology";

const Technologies = () => (
    <div className="technologies">
        <h1 className="title">Tecnologias</h1>
        <div>
            <Technology src="./img/icons/javascript.svg" />
            <Technology src="./img/icons/nodejs.svg" />
            <Technology src="./img/icons/html.svg" />
            <Technology src="./img/icons/css.svg" />
        </div>
        <div>
            <Technology src="./img/icons/mysql.svg" />
            <Technology src="./img/icons/mongodb.svg" />
            <Technology src="./img/icons/bootstrap.svg" />
            <Technology src="./img/icons/nosql.png" />
        </div>
        <h1 className="title">Estudando</h1>
        <div>
            <Technology src="./img/icons/react.svg" />
            <Technology src="./img/icons/c.svg" />
            <Technology src="./img/icons/c++.svg" />
        </div>
        <h1 className="title">Tenho interesse</h1>
        <div>
            <Technology src="./img/icons/reactnative.svg" />
            <Technology src="./img/icons/python.svg" />
            <Technology src="./img/icons/php.svg" />
        </div>
    </div>
);

export default Technologies;