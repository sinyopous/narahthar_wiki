import React from "react";
import data from "../data/test.json";
import "./App.css";
import { NavBar } from "./NavBar";
import { Article } from "./Article";
import { SideMenu } from "./SideMenu";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getJsonInfo = this.getJsonInfo.bind(this);
    this.state = {
      gmUnlocked: false,
      gmUser: "gm",
      gmPass: "masterpotato",
      articleText: data.regions["narahThar"].text,
      articleImage: data.regions["narahThar"].image,
      articleName: data.regions["narahThar"].name,
      articleLockedText: data.regions["narahThar"].lockedText,
      details: data.regions["narahThar"].details,
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
    this.loginMaster = this.loginMaster.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  getJsonInfo(dataName) {
    this.setState({
      articleText: data.regions[dataName].text,
      articleImage: data.regions[dataName].image,
      articleName: data.regions[dataName].name,
      articleLockedText: data.regions[dataName].lockedText,
      details: data.regions[dataName].details,
    });
  }

  loginMaster(user, pass) {
    console.log("working", user, pass);
    if (user === this.state.gmUser && pass === this.state.gmPass) {
      this.setState({ gmUnlocked: true });
    }
    console.log(this.state.gmUnlocked);
  }

  logOut() {
    this.setState({ gmUnlocked: false });
  }

  render() {
    return (
      <div className="text-light bg-dark">
        <NavBar
          state={this.state}
          dataFetch={this.getJsonInfo}
          masterLogin={this.loginMaster}
          logOut={this.logOut}
        />
        <div className="App container text-light bg-dark">
          <div className="row">
            {/* <SideMenu /> */}
            <div className="col-sm-10">
              <Article
                unlocked={this.state.gmUnlocked}
                articleName={this.state.articleName}
                articleText={this.state.articleText}
                articleImage={this.state.articleImage}
                articleLockedText={this.state.articleLockedText}
                details={this.state.details}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
