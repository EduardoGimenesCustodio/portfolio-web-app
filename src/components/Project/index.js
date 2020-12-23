import React from "react";

import "./styles.css";
import Button from "./../Button";

export default class Project extends 
React.Component {
    render() {
        return (
            <div className={this.props.color}>
                <div className="title-box">
                    <h1 className="title">{this.props.title}</h1>
                </div>
                <div className="description-box">
                    <h2 className="logo">{this.props.text_logo}</h2>
                    <img src={this.props.src} alt={this.props.alt} ></img>
                    
                    <p className="text">{this.props.text}</p>
                    <p className="text">{this.props.technologies}</p>
                    <div className="buttons">
                        <Button text="veja no GitHub" href={this.props.github} target="_blank" />
                        <Button text="veja online" href={this.props.link} target="_blank" />
                    </div>
                </div>
            </div>
        );
    }
}