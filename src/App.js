import React from 'react';
import logo from './nus_health_logo_round.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//3363f5
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a className="place-holder">
        <img src={logo} className="App-logo" alt="logo" />
      </a>

        <h2 className="App-paragraph">
          Welcome to NUS Health Web!
        </h2>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p className="button-row">
          <a href="https://orbidroid-backend-test-2.herokuapp.com/swagger-ui.html">
            <button className="btn btn-primary btn-sm">Admin Portal</button>
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://drive.google.com/file/d/1hXzafCCEnBW8ul6tbRxQYmUL7bmQS49J/view?usp=sharing">
            <button className="btn btn-primary btn-sm">Video</button>
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://drive.google.com/file/d/1yHgiCypPa_2P5oTWuZRz3uY5HX_ThTp3/view?usp=sharing">
            <button className="btn btn-primary btn-sm">Poster</button>
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://docs.google.com/document/d/1xfTno3hD7-e9y-WkS12b4706i4Ds-xkkVNmXfTZ3Rd0/edit?usp=sharing">
            <button className="btn btn-primary btn-sm">Readme</button>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
