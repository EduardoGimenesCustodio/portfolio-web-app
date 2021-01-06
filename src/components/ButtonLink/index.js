import React from "react";
import { Link } from 'react-router-dom';

export default class ButtonLink extends 
React.Component {
    render() {
        return (
            <Link className="button text" to={this.props.to} target={this.props.target}>{this.props.text}</Link>
        );
    }
}