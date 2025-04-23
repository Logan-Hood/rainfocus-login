import React from 'react';
import logo from './assets/logo.svg';
import largeLogo from './assets/large_logo.png';



function App() {
  return (


    <div className="app-wrapper">

      <div className="login-container">
        <img src={logo} alt="Logo" className="logo-top-left" />
        <h1 className="login-title">Sign in to RainFocus</h1>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="user@company.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Type your password" />

          <button type="submit">Sign In</button>
          <p className="forgot-password">
            <a href="#">Forgot password?</a>
          </p>
        </form>
        <p className="demo-link">
          Not yet a customer? <a href="#">Request a demo</a>
        </p>
      </div>

      <div className="side-section">
        <img src={largeLogo} alt="RainFocus IMG" />
        <h2 className="side-heading">Access INSIGHT 2025 Sessions On Demand</h2>
        <p className="side-description">
          INSIGHT was filled with inspiring keynotes, valuable technical sessions, and expert analysis.
          Watch sessions you missed or revisit your favorites in RainFocus On Demand.
        </p>
        <button className="side-button">View Sessions</button>
      </div>
    </div>
  );
}

export default App;

