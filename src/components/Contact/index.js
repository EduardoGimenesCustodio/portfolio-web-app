import React from "react";

import "./styles.css";

export default class Contact extends 
React.Component {
    render() {
        return (
            <a className="contact" href={this.props.href} target="_blank" rel="noreferrer"><img src={this.props.src} alt={this.props.alt}></img></a>
        );
    }
}