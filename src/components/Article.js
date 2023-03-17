import React from "react";

export class Article extends React.Component {


  render() {
    return (
      <div className="row">
        <h2>{this.props.articleName}</h2>
        <img src={this.props.articleImage}/>
        <p>{ this.props.articleText }</p>
      </div>
    );
  }
}
