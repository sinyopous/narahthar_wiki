import React from "react";
import data from "../data/test.json";
export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articleText: "happy place", articleImage: ":D" };
    this.getJsonInfo = this.getJsonInfo.bind(this);
  }
  

  getJsonInfo() {
    const inputField = document.getElementById("inputSearch");
    const objectToFetch = inputField.value;
    this.setState({ articleText: data.cities[objectToFetch].text , articleImage: data.cities[objectToFetch].image} );

  }

  render() {
    return (
      <div className="row">
        <input id="inputSearch"></input>
        <button onClick={this.getJsonInfo}>go</button>
        <h2>{this.state.testStat}</h2>
        <img src={ this.state.articleImage }/>
        <h2>{ this.state.articleText }</h2>
      </div>
    );
  }
}
