import React from "react";
import "./NavBar.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.articleHandler = this.articleHandler.bind(this);
  }
  articleHandler(event) {
    console.log(event);
    const searchKey = event.target.id;
    console.log(searchKey);
    this.props.dataFetch(searchKey);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top bg-light-subtle">
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
                  {this.props.state.mapa}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.articleHandler}
                      id={this.props.state.region.norte[1]}
                    >
                      {this.props.state.region.norte[0]}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.articleHandler}
                      id={this.props.state.region.oeste[1]}
                    >
                      {this.props.state.region.oeste[0]}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.articleHandler}
                      id={this.props.state.region.este[1]}
                    >
                      {this.props.state.region.este[0]}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {this.props.state.region.sur}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {this.props.state.region.islasSur}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.articleHandler}
                      id={this.props.state.region.continenteNorte[1]}
                    >
                      {this.props.state.region.continenteNorte[0]}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {this.props.state.hechizos}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
