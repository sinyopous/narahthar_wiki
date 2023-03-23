import React from "react";
import "./Article.css";

export class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div id="landscapeImage">
            <img src={this.props.articleImage} />
          </div>
          <div className="row">
            <h2>{this.props.articleName}</h2>
            <p>{this.props.articleText}</p>
            <p>{this.props.unlocked && this.props.articleLockedText}</p>
          </div>
        </div>
      </div>
    );
  }
}
