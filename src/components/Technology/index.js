import React from "react";

import "./styles.css";

export default class Technology extends 
React.Component {
    render() {
        return (
            <a className="technology">
                <img src={this.props.src}></img>
            </a>
        );
    }
}