import './App1.css';
import * as React from 'react';
import Home from './components/Home';

function App1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Haadi e-khaata</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active add-bar" aria-current="page" href="/">Records List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link add-bar" href="/">Funds</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Expense</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home />
    </>
  );
}

export default App1;
