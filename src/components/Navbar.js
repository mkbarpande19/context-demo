import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  render() {
    return (
      <AuthContext>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(context) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = context;

              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "LoggedIN" : "LoggedOut"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext>
    );
  }
}
