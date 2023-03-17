import React from "react";
import data from "../data/test.json";
import "./App.css";
import { NavBar } from "./NavBar";
import { Article } from "./Article";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getJsonInfo = this.getJsonInfo.bind(this);
    this.state = {
      articleName: "happy name",
      articleText: "happy place",
      articleImage: ":D",
      mapa: "mapa",
      region: {
        norte: ["martillo rocoso", "martilloRocoso"],
        oeste: ["bosques elficos", "bosquesElficos"],
        este: ["la herida", "laHerida"],
        sur: "reino humano",
        islasSur: "islas hombres bestia",
        continenteNorte: ["farahstnar", "farahstnar"],
      },
      hechizos: "hechizos",
      clase: {
        mago: "mago",
      },
    };
    this.getJsonInfo = this.getJsonInfo.bind(this);
  }

  getJsonInfo(dataName) {
    this.setState({
      articleText: data.regions[dataName].text,
      articleImage: data.regions[dataName].image,
      articleName: data.regions[dataName].name,
    });
  }
  render() {
    return (
      <div>
        <NavBar state={this.state} dataFetch={this.getJsonInfo} />
        <div className="App container">
          <Article
            articleName={this.state.articleName}
            articleText={this.state.articleText}
            articleImage={this.state.articleImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
