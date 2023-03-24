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
          <div id="landscapeImage" >
            <img src={this.props.articleImage} className="h-25"/>
          </div>
          <div className="row">
            <div className="col-md-8" id="infoBox">
            <h1>{this.props.articleName}</h1>
            <p>{this.props.articleText}</p>
            <p>{this.props.unlocked && this.props.articleLockedText}</p>
            </div>
            <div className="col-md">
              <LocationDetails details={this.props.details}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
