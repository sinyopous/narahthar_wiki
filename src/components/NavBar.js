import React from "react";
import "./NavBar.css";
import {Login} from './Login'
import {Logout} from './LogOut'

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
      <nav className="navbar navbar-expand-lg sticky-top bg-dark">
        <div className="container-fluid">
          <a
            onClick={this.articleHandler}
            id={this.props.state.region.continente[1]}
            className="navbar-brand colorText"
            href="#"
          >
            {this.props.state.region.continente[0]}
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
                <a className="nav-link colorText" aria-current="page" href="#">
                  mapa
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
                  {this.props.state.zonas}
                </a>
                <ul className="dropdown-menu" data-bs-theme="dark">
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
                      id={this.props.state.region.sur[1]}
                    >
                      {this.props.state.region.sur[0]}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.articleHandler}
                      id={this.props.state.region.islasSur[1]}
                    >
                      {this.props.state.region.islasSur[0]}
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
              <li className="nav-item" id="loginButton">
                { !this.props.state.gmUnlocked && <Login masterLogin={this.props.masterLogin} />}
                { this.props.state.gmUnlocked && <Logout logOut={this.props.logOut}/>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
