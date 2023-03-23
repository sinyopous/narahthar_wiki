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
      unlocked: true,
      articleName: "happy name",
      articleText: "happy place",
      articleImage: ":D",
      articleLockedText: "this is top secret, shhh",
      zonas: "zonas",
      region: {
        continente: ["Narah'thar", "narahThar"],
        norte: ["martillo rocoso", "martilloRocoso"],
        oeste: ["bosques elficos", "bosquesElficos"],
        este: ["la herida", "laHerida"],
        sur: ["reino humano", "reinoHumano"],
        islasSur: ["islas hombres bestia", "islasHombresBestia"],
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
      articleLockedText: data.regions[dataName].lockedText,
    });
  }

  
  render() {
    return (
      <div className="text-light bg-dark">
        <NavBar state={this.state} dataFetch={this.getJsonInfo} />
        <div className="App container text-light bg-dark">
          <Article
            unlocked={this.state.unlocked}
            articleName={this.state.articleName}
            articleText={this.state.articleText}
            articleImage={this.state.articleImage}
            articleLockedText={this.state.articleLockedText}
          />
        </div>
      </div>
    );
  }
}

export default App;
