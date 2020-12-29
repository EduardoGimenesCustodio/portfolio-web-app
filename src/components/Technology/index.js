import React from "react";

import "./styles.css";

export default class Technology extends 
React.Component {
    render() {
        return (
            <section className="technology">
                <img src={this.props.src} alt={this.props.alt}></img>
                <p>{this.props.name}</p>
            </section>
        );
    }
}