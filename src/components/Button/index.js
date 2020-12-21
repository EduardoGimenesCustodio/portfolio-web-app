import React from "react";

import "./styles.css";

export default class Button extends 
React.Component {
    render() {
        return (
            <a className="button" href={this.props.href} target={this.props.target}><button className="text">{this.props.text}</button></a>
        );
    }
}