import React from "react";
import "./Login.css";

export class Login extends React.Component {
  render() {
    return (
      <div class="dropdown" id="loginBox">
        <button
          type="button"
          class="btn btn-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Login
        </button>
        <form class="dropdown-menu p-4">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail2" class="form-label">
              Personaje
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="sangriento"
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword2" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="admin123"
            />
          </div>
          <button type="submit" class="btn btn-secondary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
