import React from 'react';
// import Container from './/_container';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  navbarItems() {
    let links = ['Shots', 'Designers', 'Teams', 'Community', 'Jobs'];
    return links.map(link => {
      return (<li className="navbar-nav">Shots</li>);
    });
  }

  render() {
    return(
      <nav className="navbar">
        <ul className="navbar-nav">
          {this.navbarItems()}
        </ul>

        <div className="navbar-login">
          <p></p>
          <p></p>
          <input type="text"/>
        </div>
      </nav>
    )
  }
}

export default Navbar;