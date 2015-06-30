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