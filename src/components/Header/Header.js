import React from 'react';
import './Header.css';
import logo from 'C:\\Users\\shann\\Documents\\dev\\react-testspace\\Git-hub-portofio\\github-portfolio\\src\\GitHub-Mark-64px.png'
import Link from '../Link/Link.js';

const Header = () => {

    return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1> Shannon Reidy</h1>
    <h3> Github Portfolio</h3>
  </header>
    );
}

export default Header;