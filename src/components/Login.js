import React from "react";
import "./Login.css";

export class Login extends React.Component {
  constructor(props){
    super(props)
    this.masterLogin = this.masterLogin.bind(this)
  }
  masterLogin(){
    const user = document.getElementById('user').value
    const pass = document.getElementById('pass').value
    console.log(user, pass)
    this.props.masterLogin(user, pass)
   
  }

  render() {
    return (
      <div className="dropdown" id="loginBox">
        <button
          type="button"
          className="btn btn-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Login
        </button>
        <form className="dropdown-menu p-4">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail2" className="form-label">
              Personaje
            </label>
            <input
              
              className="form-control"
              id="user"
              placeholder="sangriento"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="123"
            />
          </div>
          <button type="submit" className="btn btn-secondary" onClick={ this.masterLogin }>
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
