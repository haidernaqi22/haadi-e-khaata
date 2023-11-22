import './App1.css';
import * as React from 'react';
import {
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Records from './components/Records';
import Funds from './components/Funds';
import Expense from './components/Expense';

function App1() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Haadi e-khaata</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-end" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active add-bar" aria-current="page" to="/records">Records List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link add-bar" to="/records/funds">Funds</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expense">Expense</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/records" element={<Records />} />
          <Route path="/records/funds" element={<Funds />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App1;
