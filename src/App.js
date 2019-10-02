import React from "react";
import "./reset.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
  }
  render() {
    return (
      <div>
        <nav>
          <div id="image-container"></div>
          <i className="fas fa-bars" id="hamburger-icon" />
          <div id="button-container">
            <div className="button">Home</div>
            <div className="button">About</div>
            <div className="button">Services</div>
            <div className="button">Contact</div>
          </div>
        </nav>
        <div id="stuff">The Rest of the Stuff</div>
      </div>
    );
  }
}

export default App;
