import React from "react";
import "./NavBar.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapa: "mapa",
      region: {
        norte: "martillo rocoso",
        oeste: "bosques elficos",
        este: "la herida",
        sur: "reino humano",
      },
      hechizos: "hechizos",
      clase: {
        mago: "mago",
      },
    };
  }

  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Narah´Thar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {this.state.mapa}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {this.state.region.norte}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {this.state.region.oeste}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {this.state.region.este}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {this.state.region.sur}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
