import React from "react";
import "./Article.css";
import { LocationDetails } from "./LocationDetails";

export class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div id="landscapeImage">
            <div id="shadow"></div>
            <img
              src="./images/assets/borderTopLeft.png"
              id="cornerLeftTop"
              className="h-25"
            ></img>
            <img
              src="./images/assets/borderTopRight.png"
              id="cornerRightTop"
              className="h-25"
            ></img>
            <img src="./images/assets/borderBottomLeft.png" id="cornerLeftBot" className="h-25"></img>
            <img src="./images/assets/borderBottomRight.png" id="cornerRightBot" className="h-25"></img>
            <img
              src={this.props.articleImage}
              className="h-25"
              id="landscape"
            />
          </div>
          <div className="row">
            <div className="col-md-8" id="infoBox">
              <h1>{this.props.articleName}</h1>
              <p id="text">{this.props.articleText}</p>
              <p>{this.props.unlocked && this.props.articleLockedText}</p>
            </div>
            <div className="col-md">
              <LocationDetails details={this.props.details} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
