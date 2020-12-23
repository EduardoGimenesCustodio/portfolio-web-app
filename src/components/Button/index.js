import React from "react";

import "./styles.css";

export default class Button extends 
React.Component {
    render() {
        return (
            <a className="button text" href={this.props.href} target={this.props.target}>{this.props.text}</a>
        );
    }
}