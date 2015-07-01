import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <header className="clearfix">
        GCV Data Subscription

        <nav className="clearfix">
          <div className="nav-item">
            <Link to="home">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="deals">Deals</Link>
          </div>
          <div className="nav-item">
            <Link to="investors">Investors</Link>
          </div>
          <div className="nav-item">
            <Link to="search">Search</Link>
          </div>
          <div className="nav-item">
            <Link to="analysis">Analysis</Link>
          </div>
          <div className="nav-item">
            <Link to="settings">Settings</Link>
          </div>
          <div className="nav-item">
            <Link to="library">Library</Link>
          </div>
          <div className="nav-item">
            <Link to="glossary">Glossary</Link>
          </div>
          <div className="nav-item">
            <Link to="info">Info</Link>
          </div>
        </nav>
      </header>
    );
  }

}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;