import React from "react";

import "./styles.css";
import Button from "./../Button";

export default class Project extends React.Component {
  render() {
    return (
      <div className={this.props.color}>
        <div className="title-box">
          <h1 className="title">{this.props.title}</h1>
        </div>
        <section className="description-box">
          <div>
            <h2 className="logo">{this.props.text_logo}</h2>
            <img src={this.props.src} alt={this.props.alt}></img>
          </div>

          <div>
            <p className="text">{this.props.text}</p>
            <p className="text">{this.props.technologies}</p>
            <div className="buttons">
              <Button
                text="veja no GitHub"
                href={this.props.github}
                target="_blank"
              />
              {this.props.link !== undefined && (
                <Button
                  text="veja online"
                  href={this.props.link}
                  target="_blank"
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
